import Memory from './Memory.js'
import Chat from './Chat.js'
import Calculator from './Calculator.js'
import './dragWindow.js'
import * as ls from './LocalStorage.js'

let container = document.querySelector('#app-container')
let memBtn = document.querySelector('#memory-button')
let chatBtn = document.querySelector('#chat-button')
let calcBtn = document.querySelector('#calc-button')
ls.hasLocalStorage()

let appArray = []

let zOffset = 0

memBtn.addEventListener('click', () => {
  let mem = new Memory()
  container.appendChild(mem)
  appArray.push(mem)

  setZIndex()
  closeWindow()
})

chatBtn.addEventListener('click', () => {
  let chat = new Chat()
  container.appendChild(chat)
  appArray.push(chat)

  setZIndex()
  closeWindow()
})

calcBtn.addEventListener('click', () => {
  let calc = new Calculator()
  container.appendChild(calc)
  appArray.push(calc)

  setZIndex()
  closeWindow()
})

container.addEventListener('mousedown', e => {
  let index = appArray.indexOf(e.target)
  let tempIndex = appArray[index]

  appArray.splice(index, 1)
  appArray.push(tempIndex)
  setZIndex()
})

function getPath (e) {
  return e.shadowRoot.querySelector('drag-window').shadowRoot.querySelector('#drag-container')
}

function setZIndex () {
  appArray.forEach(e => {
    getPath(e).style.zIndex = zOffset + appArray.indexOf(e)
  })
}

function closeWindow () {
  let button = appArray[appArray.length - 1].shadowRoot.querySelector('drag-window').shadowRoot.querySelector('#status-bar #close-window')

  button.addEventListener('click', e => {
    // console.log('hej')
    let closePath = e.target.parentNode.parentNode.parentNode.host.parentNode.host
    // console.log(closePath)
    closePath.parentNode.removeChild(closePath)
    appArray.pop()
  })
}
