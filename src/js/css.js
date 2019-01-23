
const dragCss = document.createElement('template')
dragCss.innerHTML = /* css */`
<style>
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

export { memoryCss, dragCss }
