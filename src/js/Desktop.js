import { desktopTemplate, memoryTemplate, memoryInputTemplate } from './templates.js'
import Memory from './Memory.js'

class Desktop extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(desktopTemplate.content.cloneNode(true))

    this.memBtn = this.shadowRoot.querySelector('#start-memory')

    this.Memory()
  }

  Memory () {
    this.memBtn.addEventListener('click', () => {
      // console.log('clicked!!!!!')
      this.shadowRoot.appendChild(memoryInputTemplate.content.cloneNode(true))

      // let mem = new Memory(this.rowsInput, this.colsInput)
      // this.shadowRoot.appendChild(document.createElement('memory-game'))
      // this.shadowRoot.appendChild(mem)
    })
  }
}

window.customElements.define('start-screen', Desktop)
