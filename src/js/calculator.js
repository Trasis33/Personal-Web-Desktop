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
    this.buttons = this.shadowRoot.querySelector('.calc-buttons')
    console.log(this.container, this.display)

    this.calcObj = {
      firstNum: null,
      secondNum: false,
      func: null,
      display: '0'
    }
    this.updateDisplay()
    this.calcInput()
  }

  updateDisplay () {
    this.display.textContent = this.calcObj.display
  }

  calcInput () {
    this.buttons.addEventListener('click', e => {
      if (e.target.classList.contains('function')) {
        console.log(e.target.value)
        return
      }
      if (e.target.classList.contains('decimal')) {
        console.log(e.target.value)
        return
      }
      if (e.target.classList.contains('clear')) {
        console.log(e.target.value)
        return
      }
      console.log(e.target.value)
    })
  }
}

window.customElements.define('calc-window', Calculator)
