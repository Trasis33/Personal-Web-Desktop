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
    this.btnInput()
  }

  updateDisplay () {
    this.display.textContent = this.calcObj.display
  }

  btnInput () {
    this.buttons.addEventListener('click', e => {
      if (e.target.classList.contains('function')) {
        this.funcs(e.target.value)
        this.updateDisplay()
        return
      }
      if (e.target.classList.contains('decimal')) {
        this.inputDec(e.target.value)
        this.updateDisplay()
        return
      }
      if (e.target.classList.contains('clear')) {
        this.inputNum(e.target.value)
        this.updateDisplay()
        return
      }
      this.inputNum(e.target.value)
      this.updateDisplay()
    })
  }

  inputNum (num) {
    if (this.calcObj.display === '0') {
      this.calcObj.display = num
    } else {
      this.calcObj.display += num
    }
    console.log(this.calcObj)
  }

  inputDec (decimal) {
    if (!this.calcObj.display.includes(decimal)) {
      this.calcObj.display += decimal
    }
  }

  funcs (nextFunc) {
    let input = parseFloat(this.calcObj.display)

    if (this.calcObj.firstNum === null) {
      this.calcObj.firstNum = input
    }
    this.calcObj.secondNum = true
    this.calcObj.func = nextFunc
    console.log(this.calcObj)
  }
}

window.customElements.define('calc-window', Calculator)
