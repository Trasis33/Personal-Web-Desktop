import { chatTemplate } from './templates.js'
import { chatCss } from './css.js'
// import * as config from './config.js'

export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(chatCss.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))

    this.container = this.shadowRoot.querySelector('#chat')
    this.chatDiv = document.importNode(this.container.firstElementChild, true)
    this.messageArea = this.shadowRoot.querySelector('.message-area')

    this.messageArea.addEventListener('keypress', e => {
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

  async connect () {
    let promise = new Promise((resolve, reject) => {
      if (this.socket && this.socket.readyState === 1) {
        resolve(this.socket)
        return
      }
      this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')

      resolve(this.socket)

      this.socket.addEventListener('message', e => {
        this.message = JSON.parse(e.data)
        if (this.message.type === 'message') {
          this.printMessage(this.message)
        }
      })
    })

    let result = await promise
    return result
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
    console.log('Sending message ' + text)
  }

  printMessage (message) {
    this.template = this.chatDiv.querySelectorAll('template')[0]
    this.messageDiv = document.importNode(this.template.content.firstElementChild, true)
    console.log(this.messageDiv)

    this.messageDiv.querySelectorAll('.text')[0].textContent = message.data
    this.messageDiv.querySelectorAll('.author')[0].textContent = message.username

    this.shadowRoot.querySelectorAll('.messages')[0].appendChild(this.messageDiv)
  }
}

window.customElements.define('chat-window', Chat)
