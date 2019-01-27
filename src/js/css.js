
const dragCss = document.createElement('template')
dragCss.innerHTML = /* css */`
<style>

#status-bar {
  border: 2px solid black;
  background-color: rgb(224, 250, 250);
  width: 300px;
}

#drag-container {
  position: absolute;
  width: auto;
  height: auto; 
}
</style>
`

const memoryCss = document.createElement('template')
memoryCss.innerHTML = /* css */`
<style>
#memory-container {
  width: 300px;
  height: 350px;
  border: 2px solid black;
  background-color: rgb(224, 250, 250);
  position: absolute;
  cursor: pointer;
}

img {
  width: 60px;
}

.removed {
  visibility: hidden;
}
</style>
`
/* scrollbar: https://codepen.io/GhostRider/pen/GHaFw */

const chatCss = document.createElement('template')
chatCss.innerHTML = /* css */`
<style>
#chat-container {
  width: 300px;
  height: 350px;
  border: 2px solid black;
  background-color: rgb(224, 250, 250);
  position: absolute;
  cursor: pointer;
  overflow: hidden;
}

.messages {
  height: 300px;
  background: #F5F5F5;
  overflow-y: scroll;
}

#scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar-thumb {
  background-color: #F90;
  background-image: -webkit-linear-gradient(45deg,
  rgba(255, 255, 255, .2) 25%,
  transparent 25%,
  transparent 50%,
  rgba(255, 255, 255, .2) 50%,
  rgba(255, 255, 255, .2) 75%,
  transparent 75%,
  transparent)
}

.message-area {
  
}

</style>
`

const calcCss = document.createElement('template')
calcCss.innerHTML = /* css */`
<style>

#calc-container {
  width: 300px;
  height: 350px;
  border: 2px solid black;
  background-color: rgb(224, 250, 250);
  position: absolute;
  cursor: pointer;
}

</style>
`

export { memoryCss, dragCss, chatCss, calcCss }
