import { dragTemplate } from './templates.js'
import { dragCss } from './css.js'

class dragWindow extends window.HTMLElement {
  constructor () {
    super()

    this.mouseOffset = { x: 0, y: 0 }
    this.active = false

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(dragCss.content.cloneNode(true))
    this.shadowRoot.appendChild(dragTemplate.content.cloneNode(true))

    this.container = this.shadowRoot.querySelector('#drag-container')

    this.dragWindow()
  }

  dragWindow () {
    this.container.addEventListener('mousedown', (e) => {
      this.dragStart(e)
    })
    window.addEventListener('mousemove', (e) => {
      this.drag(e)
    })
    window.addEventListener('mouseup', (e) => {
      this.dragEnd(e)
    })
  }

  dragStart (e) {
    this.active = true
    this.mouseOffset = {
      x: this.container.offsetLeft - e.clientX,
      y: this.container.offsetTop - e.clientY
    }
  }

  dragEnd () {
    this.active = false
    this.container.style.opacity = 1
  }

  drag (e) {
    e.preventDefault()
    if (this.active) {
      this.container.style.opacity = 0.5
      this.container.style.left = e.clientX + this.mouseOffset.x + 'px'
      this.container.style.top = e.clientY + this.mouseOffset.y + 'px'
    }
  }
}

window.customElements.define('drag-window', dragWindow)
