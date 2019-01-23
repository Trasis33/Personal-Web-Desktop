import Memory from './Memory.js'
import './dragWindow.js'

let container = document.querySelector('#app-container')
let memBtn = document.querySelector('#memory-button')

let appArray = []

let zOffset = 0

memBtn.addEventListener('click', () => {
  let mem = new Memory()
  container.appendChild(mem)
  appArray.push(mem)
  // console.log(appArray.length)
  setZIndex()
})

container.addEventListener('mousedown', e => {
  let index = appArray.indexOf(e.target)
  let tempIndex = appArray[index]
  // console.log(appArray)

  appArray.splice(index, 1)
  appArray.push(tempIndex)
  setZIndex()
})

function getPath (e) {
  // appArray.forEach(e => {
  // console.log(e.shadowRoot.querySelector('drag-window').shadowRoot.querySelector('#drag-container'))
  // e.shadowRoot.querySelector('drag-window').shadowRoot.querySelector('#drag-container')
  return e.shadowRoot.querySelector('drag-window').shadowRoot.querySelector('#drag-container')
  // })
}

function setZIndex () {
  // let zPath = path

  appArray.forEach(e => {
    getPath(e).style.zIndex = zOffset + appArray.indexOf(e)
  })
}
