import { dragTemplate } from './templates.js'

class dragWindow extends window.HTMLElement {
  constructor () {
    super()

    this.mouseOffset = { x: 0, y: 0 }
    this.active = false

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(dragTemplate.content.cloneNode(true))

    this.container = this.shadowRoot.querySelector('#container')

    // this.activeWindow = null

    // this.currentX = null
    // this.currentY = null
    // this.initialX = null
    // this.initialY = null
    // this.xOffset = 0
    // this.yOffset = 0

    // this.container.addEventListener('mousedown', this.dragStart(), false)
    // this.dragStart()
    // this.container.addEventListener('mouseup', this.dragEnd(), false)
    // this.dragEnd()
    // this.container.addEventListener('mousemove', this.drag(), false)
    // this.drag()

    this.dragWindow()
  }

  dragWindow () {
    this.container.addEventListener('mousedown', (e) => {
      console.log('hej')
      this.dragStart(e)
    })
    window.addEventListener('mousemove', (e) => {
      console.log('hej')

      this.drag(e)
    })
    window.addEventListener('mouseup', (e) => {
      console.log('hej')

      this.dragEnd(e)
    })
  }

  dragStart (e) {
    this.active = true
    this.mouseOffset = {
      x: this.container.offsetLeft - e.clientX,
      y: this.container.offsetTop - e.clientY
    }
    // this.container.addEventListener('mousedown', e => {
    //   if (e.target !== e.currentTarget) {
    //     this.active = true
    //     this.activeWindow = e.target

    //     if (this.activeWindow !== null) {
    //       if (!this.activeWindow.xOffset) {
    //         this.activeWindow.xOffset = 0
    //       }
    //       if (!this.activeWindow.yOffset) {
    //         this.activeWindow.yOffset = 0
    //       }
    //       this.activeWindow.initialX = e.clientX - this.activeWindow.xOffset
    //       this.activeWindow.initialY = e.clientY - this.activeWindow.yOffset
    //     }
    //   }
    //   e.stopPropagation()
    // })
  }

  dragEnd () {
    this.active = false
    this.container.style.opacity = 1
    // this.container.addEventListener('mouseup', e => {
    //   if (this.activeWindow !== null) {
    //     this.activeWindow.initialX = this.activeWindow.currentX
    //     this.activeWindow.initialY = this.activeWindow.currentY
    //   }
    //   this.active = false
    //   this.activeWindow = null
    //   e.stopPropagation()
    // })
  }

  drag (e) {
    e.preventDefault()
    if (this.active) {
      this.container.style.opacity = 0.5
      this.container.style.left = e.clientX + this.mouseOffset.x + 'px'
      this.container.style.top = e.clientY + this.mouseOffset.y + 'px'
    }
    // this.container.addEventListener('mousemove', e => {
    //   e.preventDefault()
    //   if (this.active) {
    //     this.activeWindow.currentX = e.clientX - this.activeWindow.initialX
    //     this.activeWindow.currentY = e.clientY - this.activeWindow.initialY
    //   }
    //   this.activeWindow.xOffset = this.activeWindow.currentX
    //   this.activeWindow.yOffset = this.activeWindow.currentY

    //   this.setTranslate(this.activeWindow.currentX, this.activeWindow.currentY, this.activeWindow)
    //   e.stopPropagation()
    // })
  }

  // setTranslate (xPos, yPos, e) {
  //   e.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)'
  // }

  // dragStart (e) {
  //   if (e.target !== e.currentTarget) {
  //     this.active = true
  //     this.activeWindow = e.target

  //     if (this.activeWindow !== null) {
  //       if (!this.activeWindow.xOffset) {
  //         this.activeWindow.xOffset = 0
  //       }
  //       if (!this.activeWindow.yOffset) {
  //         this.activeWindow.yOffset = 0
  //       }
  //       this.activeWindow.initialX = e.clientX - this.activeWindow.xOffset
  //       this.activeWindow.initialY = e.clientY - this.activeWindow.yOffset
  //     }
  //   }
  // }

  // dragEnd (e) {
  //   if (this.activeWindow !== null) {
  //     this.activeWindow.initialX = this.activeWindow.currentX
  //     this.activeWindow.initialY = this.activeWindow.currentY
  //   }
  //   this.active = false
  //   this.activeWindow = null
  // }

  // drag (e) {
  //   if (this.active) {
  //     this.activeWindow.currentX = e.clientX - this.activeWindow.initialX
  //     this.activeWindow.currentY = e.clientY - this.activeWindow.initialY
  //   }
  //   this.activeWindow.xOffset = this.activeWindow.currentX
  //   this.activeWindow.yOffset = this.activeWindow.currentY

  //   this.setTranslate(this.activeWindow.currentX, this.activeWindow.currentY, this.activeWindow)
  // }
}

window.customElements.define('drag-window', dragWindow)
