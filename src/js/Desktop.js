import { desktopTemplate, memoryTemplate, memoryInputTemplate } from './templates.js'
import Memory from './Memory.js'

class Desktop extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(desktopTemplate.content.cloneNode(true))

    this.memBtn = document.querySelector('#memory-button')

    this.Memory()
  }

  Memory () {
    this.memBtn.addEventListener('click', () => {
      // console.log('clicked!!!!!')
      // this.shadowRoot.appendChild(memoryInputTemplate.content.cloneNode(true))

      let mem = new Memory(this.rowsInput, this.colsInput)
      // this.shadowRoot.appendChild(document.createElement('memory-game'))
      document.querySelector('#app-container').appendChild(mem)
    })
  }
}

window.customElements.define('start-screen', Desktop)
