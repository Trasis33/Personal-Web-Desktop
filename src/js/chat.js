import { chatTemplate } from './templates.js'
import { chatCss } from './css.js'
// import * as config from './config.js'
import * as ls from './LocalStorage.js'

export default class Chat extends window.HTMLElement {
  constructor () {
    super()

    this.username = ''
    this.messages = undefined
    this.timer = undefined

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(chatCss.content.cloneNode(true))
    this.shadowRoot.appendChild(chatTemplate.content.cloneNode(true))

    this.container = this.shadowRoot.querySelector('#chat')
    this.chatDiv = document.importNode(this.container.firstElementChild, true)

    this.checkLocalStorage()
  }

  checkLocalStorage () {
    if (ls.hasUsername() === true) {
      this.username = ls.getUsername('username')
      this.startChat()
    } else {
      this.createUsername()
    }
  }

  createUsername () {
    this.userTemplate = this.chatDiv.querySelector('#user-input')
    this.inputDiv = document.importNode(this.userTemplate.content.firstElementChild, true)

    this.container.appendChild(this.inputDiv)
    this.result = this.shadowRoot.querySelector('#result')

    this.inputButton = this.shadowRoot.querySelector('#submit-button')

    this.inputButton.addEventListener('click', () => {
      this.input = this.shadowRoot.querySelector('#input-field').value

      if (this.input.length < 3) {
        this.result.textContent = 'Username minimum of 3 characters!'
      } else {
        // if (ls.hasUsername()) {
        //   this.username = ls.getUsername('username')
        //   console.log(this.username)
        //   this.startChat()
        // } else {
        // ls.setUsername('username', this.input)
        this.username = this.input
        ls.setUsername('username', this.username)
        this.result.textContent = 'Your username is ' + this.username

        this.timer = setTimeout(() => {
          this.container.removeChild(this.inputDiv)
          this.startChat()
        }, 1000)
      }
      // }
    })
  }

  startChat () {
    this.connect()

    this.mTemplate = this.chatDiv.querySelectorAll('template')[1]
    this.messDiv = document.importNode(this.mTemplate.content.firstElementChild, true)
    this.container.appendChild(this.messDiv)
    this.messageArea = this.container.querySelector('.message-area')

    this.messageArea.addEventListener('keypress', e => {
      // listen for enter key
      if (e.keyCode === 13) {
        this.sendMessage(e.target.value, this.username)
        // empty textarea
        e.target.value = ''
        e.preventDefault()
      }
    })
    this.printMessageHistory()
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
          this.messageStorage(this.message)
        }
      })
    })

    let result = await promise
    return result
  }

  sendMessage (text, user) {
    this.data = {
      type: 'message',
      data: text,
      username: user,
      channel: '',
      key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
    }

    this.socket.send(JSON.stringify(this.data))
    console.log('Sending message ' + text + ' from username ' + user)
  }

  printMessage (message) {
    this.template = this.shadowRoot.querySelectorAll('template')[2]
    this.messageDiv = document.importNode(this.template.content.firstElementChild, true)

    let text = this.messageDiv.querySelectorAll('.text')[0]
    let author = this.messageDiv.querySelectorAll('.author')[0]

    text.textContent = message.data
    author.textContent = message.username

    this.shadowRoot.querySelectorAll('.messages')[0].appendChild(this.messageDiv)
  }

  printMessageHistory () {
    if (window.localStorage.getItem('messages')) {
      let messages = window.localStorage.getItem('messages')
      this.messages = JSON.parse(messages)

      this.messages.sort((a, b) => Number(a.time) - Number(b.time)).map(message => this.printMessage(message))
    }
  }

  messageStorage (message) {
    let msgObj = {
      username: message.username,
      data: message.data,
      time: new Date().getTime()
    }

    let messageBoard = window.localStorage.getItem('messages') || '[]'

    let messages = [...JSON.parse(messageBoard), msgObj].sort((a, b) =>
      b.time - a.time
    ).slice(0, 5)

    window.localStorage.setItem('messages', JSON.stringify(messages))
  }
}

window.customElements.define('chat-window', Chat)
