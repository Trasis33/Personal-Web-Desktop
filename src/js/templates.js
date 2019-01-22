
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

export {
  memoryTemplate,
  memoryInputTemplate,
  desktopTemplate,
  dragTemplate
}
