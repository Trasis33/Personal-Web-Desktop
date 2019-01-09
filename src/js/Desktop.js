import { desktopTemplate } from './templates.js'
import './Memory.js'

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
      this.shadowRoot.appendChild(document.createElement('memory-game'))
    })
  }
}

window.customElements.define('start-screen', Desktop)
