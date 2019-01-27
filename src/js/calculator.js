import { calcTemplate } from './templates.js'
import { calcCss } from './css.js'

export default class Calculator extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(calcCss.content.cloneNode(true))
    this.shadowRoot.appendChild(calcTemplate.content.cloneNode(true))

    this.container = this.shadowRoot.querySelector('#calculator')
    this.display = this.shadowRoot.querySelector('.calc-display')
    console.log(this.container, this.display)

    this.calcObj = {
      firstNum: null,
      secondNum: false,
      func: null,
      display: '0'
    }
    this.updateDisplay()
  }

  updateDisplay () {
    this.display.textContent = this.calcObj.display
  }
}

window.customElements.define('calc-window', Calculator)
