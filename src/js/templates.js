
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
  <button type="button" id="close-window"></button>
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
<div id="memory-container" class="effect">
  <div id="memory">
    <p>Memory Game</p>
    <template id="user-input">
      <div class="input-container">
        <form id="input-form">
          <button id="two-button" type="button"></input>
          <button id="four-button" type="button"></button>
        </form>
        <p id="result"></p>
      </div>
    </template>
      <template>
        <div class="memCards">
        </div>
      </template>
  </div>
</div>
</drag-window>
`

const chatTemplate = document.createElement('template')
chatTemplate.innerHTML = /* html */`
<drag-window>
<div id="chat-container" class="effect">
  <div id="chat">
    <div class="chat">
      <template id="user-input">
      <div class="input-container">
        <form id="input-form">
          <input id="input-field" type="text"></input>
          <button id="submit-button" type="button">Submit</button>
        </form>
        <p id="result"></p>
      </div>
      </template>
      <template id="message-container">
      <div id="mess-div">
        <div class="messages" id="scrollbar">
        <template>
            <div class="message">
              <p class="text"></p>
              <p class="author"></p>
            </div>
        </template>
        </div>
      </div>
      </template>
      <textarea class="message-area"></textarea>
    </div>
  </div>
</div>
</drag-window>
`

const calcTemplate = document.createElement('template')
calcTemplate.innerHTML = /* html */`
<drag-window>
<div id="calc-container" class="effect">
  <div id="calculator">
    <div class="calc-display"></div>
    <div class="calc-buttons">
      <button type="button" class="function" value="+">+</button>
      <button type="button" class="function" value="-">-</button>
      <button type="button" class="function" value="*">&times;</button>
      <button type="button" class="function" value="/">&divide;</button>
      <button type="button" value="7">7</button>
      <button type="button" value="8">8</button>
      <button type="button" value="9">9</button>
      <button type="button" value="4">4</button>
      <button type="button" value="5">5</button>
      <button type="button" value="6">6</button>
      <button type="button" value="1">1</button>
      <button type="button" value="2">2</button>
      <button type="button" value="3">3</button>
      <button type="button" value="0">0</button>
      <button type="button" class="decimal" value=".">.</button>
      <button type="button" class="clear" value="clear">AC</button>
      <button type="button" class="equal function" value="=">=</button>
    </div>
  </div>
</div>
</drag-window>
`

export {
  memoryTemplate,
  memoryInputTemplate,
  desktopTemplate,
  dragTemplate,
  chatTemplate,
  calcTemplate
}
