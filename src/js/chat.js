
export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connect () {

  }

  sendMessage () {

  }

  printMessage () {

  }
}

window.customElements.define('chat-window', Chat)
