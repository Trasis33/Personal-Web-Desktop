// import './Desktop.js'
import Memory from './Memory.js'

let container = document.querySelector('#app-container')
let memBtn = document.querySelector('#memory-button')

memBtn.addEventListener('click', () => {
  let mem = new Memory()
  container.appendChild(mem)
})
