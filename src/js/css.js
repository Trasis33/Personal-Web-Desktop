
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

#calculator {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  overflow: hidden;
}

.calc-display {
  background-color: #263238;
  color: #ECEFF1;
  padding: 1.0em 1.0em;
  text-align: right;
}

.calc-buttons {
  background-color: #999;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 1fr);
}

.calc-buttons > * {
  background-color: #fff;
  padding: 1.5em 1.75em;
  position: relative;
  text-align: center;
}

.function {
  background-color: #eee;
}

.equal {
  background-image: linear-gradient(to bottom, #B9F6CA, #69F0AE);
  grid-column: -2;
  grid-row: 2 / span 4;
}

</style>
`

export { memoryCss, dragCss, chatCss, calcCss }
