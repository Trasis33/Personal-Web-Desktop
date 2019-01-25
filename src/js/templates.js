
const desktopTemplate = document.createElement('template')
desktopTemplate.innerHTML = /* html */`
<link rel="stylesheet" href="css/style.css">
<div class="buttons">
<button type="button" id="start-memory">Memory</button>
<button type="button" id="start-calculator">Calculator</button>
<button type="button" id="start-weather">Weather</button>
<button type="button" id="start-chat">Chat</button>
</div>
`

const dragTemplate = document.createElement('template')
dragTemplate.innerHTML = /* html */`
<div id="drag-container">
  <div id="status-bar">
  <button type="button" id="close-window">close</button>
  </div>
  <slot></slot>
</div>
`

const memoryInputTemplate = document.createElement('template')
memoryInputTemplate.innerHTML = /* html */`
<div id="memory-container">
  <div class="input-field1">
    <form>
      Input number of rows:<br>
      <input type="text" id="rows-input" value="Rows"><br>
      Input number of columns:<br>
      <input type="text" id="cols-input" value="Columns"><br>
     <!-- <input type="submit" id="collect-input">-->
    </form>
    <button type="button" id="collect-input">Submit</button>

  </div>
</div>
</div>
`
const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */`
<drag-window>
<div id="memory-container">
<p>Memory Game</p>
  <div class="memCards">
  </div>
</div>
</drag-window>
`

const chatTemplate = document.createElement('template')
chatTemplate.innerHTML = /* html */`
<drag-window>
<div id="chat-container">
  <div id="chat">
    <div class="chat">
    <template id="user-input">
    <div class="input-container">
      <form id="input-form">
        <input id="input-field" type="text"></input>
        <button id="submit-button" type="button">Submit</button>
      </form>
    </div>
    </template>
    <template>
      <div class="messages" id="scrollbar">
          <div class="message">
            <p class="text"></p>
            <p class="author"></p>
          </div>
      </div>
      <textarea class="message-area"></textarea>
      </template>
    </div>
  </div>
</div>
</drag-window>
`

const chatUsernameTemplate = document.createElement('template')
chatUsernameTemplate.innerHTML = /* html */`

`

export {
  memoryTemplate,
  memoryInputTemplate,
  desktopTemplate,
  dragTemplate,
  chatUsernameTemplate,
  chatTemplate
}
