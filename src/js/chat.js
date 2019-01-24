import { chatTemplate } from './templates.js'
import { chatCss } from './css.js'
import config from './config.json'

export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    this.socket = new WebSocket(config.adress)

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(chatCss.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))

    // this.template = this.shadowRoot.querySelector('.chat')
    // this.chatDiv = this.shadowRoot.importNode(this.template.content.firstChild, true)

    this.chatDiv = this.shadowRoot.querySelector('.message-area')
    // console.log(this.chatDiv)

    this.chatDiv.addEventListener('keypress', e => {
      // listen for enter key
      if (e.keyCode === 13) {
        this.sendMessage(e.target.value)
        // empty textarea
        e.target.value = ''
        e.preventDefault()
      }
    })

    this.connect()
  }

  connect () {
    // new WebSocket('ws://vhost3.lnu.se:20080/socket/')

  }

  sendMessage (text) {
    let data = {
      type: 'message',
      data: text,
      username: 'trasis',
      channel: '',
      key: config.key
    }

    // this.socket.send(text)
  }

  printMessage () {

  }
}

window.customElements.define('chat-window', Chat)
