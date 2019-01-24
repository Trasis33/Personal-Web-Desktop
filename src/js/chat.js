import { chatTemplate } from './templates.js'
import { chatCss } from './css.js'

export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(chatCss.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))

    // this.template = this.shadowRoot.querySelector('.chat')
    // this.chatDiv = this.shadowRoot.importNode(this.template.content.firstChild, true)

    this.chatDiv = this.shadowRoot.querySelector('.message-area')
    // console.log(this.chatDiv)

    this.connect()
  }

  connect () {
    this.chatDiv.addEventListener('keypress', e => {
      // listen for enter key
      if (e.keyCode === 13) {
        // send message
        // empty textarea
        e.target.value = ''
        e.preventDefault()
      }
    })
  }

  sendMessage () {

  }

  printMessage () {

  }
}

window.customElements.define('chat-window', Chat)
