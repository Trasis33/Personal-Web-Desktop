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
        this.reset()
        this.updateDisplay()
        return
      }
      this.inputNum(e.target.value)
      this.updateDisplay()
    })
  }

  inputNum (num) {
    if (this.calcObj.secondNum === true) {
      this.calcObj.display = num
      this.calcObj.secondNum = false
    } else {
      if (this.calcObj.display === '0') {
        this.calcObj.display = num
      } else {
        this.calcObj.display += num
      }
    }
    console.log(this.calcObj)
  }

  inputDec (decimal) {
    // to not be able to add decimal after choosing function
    if (!this.calcObj.secondNum === true) {
      // to only be able to add one decimal
      if (!this.calcObj.display.includes(decimal)) {
        this.calcObj.display += decimal
      }
    }
  }

  funcs (nextFunc) {
    let input = parseFloat(this.calcObj.display)

    if (this.calcObj.func && this.calcObj.secondNum) {
      this.calcObj.func = nextFunc
      return
    }

    if (this.calcObj.firstNum === null) {
      this.calcObj.firstNum = input
    } else if (this.calcObj.func) {
      let result = this.calculate(this.calcObj.func, this.calcObj.firstNum, input)

      this.calcObj.display = String(result)
      this.calcObj.firstNum = result
    }
    this.calcObj.secondNum = true
    this.calcObj.func = nextFunc
    console.log(this.calcObj)
  }

  calculate (func, firstNum, secondNum) {
    if (func === '+') {
      return firstNum + secondNum
    }
    if (func === '-') {
      return firstNum - secondNum
    }
    if (func === '*') {
      return firstNum * secondNum
    }
    if (func === '/') {
      return firstNum / secondNum
    }
    if (func === '=') {
      return secondNum
    }
  }

  reset () {
    this.calcObj.firstNum = null
    this.calcObj.secondNum = false
    this.calcObj.func = null
    this.calcObj.display = '0'
  }
}

window.customElements.define('calc-window', Calculator)
