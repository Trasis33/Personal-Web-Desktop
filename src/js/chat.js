import { chatTemplate } from './templates.js'
import { chatCss } from './css.js'
// import * as config from './config.js'

export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    // this.adress = config.key

    this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
    // console.log(this.adress)
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
    this.sendMessage('test')
  }

  connect () {
    // new WebSocket('ws://vhost3.lnu.se:20080/socket/')

  }

  sendMessage (text) {
    this.data = {
      type: 'message',
      data: text,
      username: 'trasis',
      channel: '',
      key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    }

    this.socket.send(JSON.stringify(this.data))
  }

  printMessage () {

  }
}

window.customElements.define('chat-window', Chat)
