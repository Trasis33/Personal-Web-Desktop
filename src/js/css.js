
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
</style>
`

export { memoryCss, dragCss, chatCss }
