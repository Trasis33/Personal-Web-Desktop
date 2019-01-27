
export default class calculator extends window.HTMLElement() {
  constructor () {
    super()
  }
}

window.customElements.define('calc-window', calculator)
