
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

const memoryTemplate = document.createElement('template')
memoryTemplate.innerHTML = /* html */`
<link rel="stylesheet" href="css/style.css">
<div id="memory-container">
<p>Memory Game</p>
  <div class="memCards">
  </div>
</div>
`
export {
  memoryTemplate,
  desktopTemplate
}
