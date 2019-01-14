
import { memoryTemplate, memoryInputTemplate } from './templates.js'

export default class Memory extends window.HTMLElement {
  constructor (rows = 4, cols = 4) {
    super()
    this.rows = rows
    this.cols = cols
    this.tiles = []
    this.container = document.getElementById('memory-container')
    this.turn1 = undefined
    this.turn2 = undefined
    this.lastTile = undefined
    this.pairs = 0
    this.tries = 0
    this.timeout = undefined
    this.pairTimeout = undefined

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(memoryTemplate.content.cloneNode(true))

    // this.rowsInput = this.shadowRoot.querySelector('#rows-input')
    // this.colsInput = this.shadowRoot.querySelector('#cols-input')
    // this.inputBtn = this.shadowRoot.querySelector('.input-field1')
    this.clean()
    this.startGame()
  }

  // connectedCallback () {
  //   console.log(this.inputBtn)
  //   this.inputBtn.addEventListener('click', () => {
  //     this.rows = this.rowsInput
  //     this.cols = this.colsInput
  //     console.log(this.rows)
  //     this.clean()
  //     this.startGame()
  //   })
  // }

  startGame () {
    this.shadowRoot.appendChild(memoryTemplate.content.cloneNode(true))

    this.tiles = this.getPicArray(this.rows, this.cols)

    for (let i = 0; i < this.rows * this.cols; i++) {
      let tile = this.tiles[i]
      let index = i

      let a = document.createElement('a')
      a.setAttribute('href', '#')

      let cards = this.shadowRoot.querySelector('.memCards')

      cards.appendChild(a)

      let img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      a.appendChild(img)

      a.addEventListener('click', (event) => {
        let img = event.target.nodeName === 'IMG' ? event.target : event.target.firstElementChild

        this.turnBrick(tile, index, img)
      })

      if ((i + 1) % this.cols === 0) {
        cards.appendChild(document.createElement('br'))
      }
    }
  }

  changeSize (rows, cols) {
    this.rows = rows
    this.cols = cols
  }

  turnBrick (tile, index, img) {
    if (this.turn2) {
      return
    }
    img.src = 'image/' + tile + '.png'

    if (!this.turn1) {
      this.turn1 = img
      this.lastTile = tile
    } else {
      if (img === this.turn1) {
        return
      }
      this.tries++
      this.turn2 = img

      if (this.lastTile === tile) {
        // Found a pair
        this.pairs++

        if (this.pairs === (this.cols * this.rows) / 2) {
          console.log('You won on ' + this.tries + ' number of tries!!!')
        }

        this.pairTimeout = setTimeout(() => {
          this.turn1.parentNode.classList.add('removed')
          this.turn2.parentNode.classList.add('removed')

          this.turn1 = null
          this.turn2 = null
        }, 200)
      } else {
        this.timeout = setTimeout(() => {
          this.turn1.src = 'image/0.png'
          this.turn2.src = 'image/0.png'

          this.turn1 = null
          this.turn2 = null
        }, 500)
      }
    }
  }

  getPicArray (rows, cols) {
    let arr = []

    for (let i = 1; i <= (rows * cols) / 2; i++) {
      arr.push(i)
      arr.push(i)
    }

    return this.shuffle(arr)
  }

  shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  clean () {
    while (this.shadowRoot.firstChild) {
      this.shadowRoot.removeChild(this.shadowRoot.firstChild)
    }
  }
}

window.customElements.define('memory-game', Memory)
