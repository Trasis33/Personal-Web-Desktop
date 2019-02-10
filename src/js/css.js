
const dragCss = document.createElement('template')
dragCss.innerHTML = /* css */`
<style>

#status-bar {
  /*border: 2px solid black;*/
  background-color: rgb(224, 250, 250);
  border-bottom: 2px solid #ffeaa7;
  border-radius: 10px 10px 0 0;
  width: 300px;
}

#drag-container {
  position: absolute;
  width: auto;
  height: auto; 
}

#close-window {
  background-image: url('../image/noun_close.png');
  background-size: cover;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: none;
}

</style>
`

const memoryCss = document.createElement('template')
memoryCss.innerHTML = /* css */`
<style>
#memory-container {
  width: 300px;
  height: 350px;
  /*border: 2px solid black;*/
  /*border-radius: 0 0 10px 10px;*/
  background-color: rgb(224, 250, 250);
  text-align: center;
  position: absolute;
  cursor: pointer;
}

img {
  width: 60px;
}

.removed {
  visibility: hidden;
}

button {

}

#two-button {
  background-image: url('../image/noun_two_2010370.png');
  background-size: cover;
  background-color: transparent;
  width: 99px;
  height: 99px;
  border: none;
}

#four-button {
  background-image: url('../image/noun_Four_2010371.png');
  background-size: cover;
  background-color: transparent;
  width: 99px;
  height: 99px;
  border: none;
}

.effect
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect:before, .effect:after
{
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
.effect:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
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
  /*border: 2px solid black;*/
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
  width: 100%;
}

.effect
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect:before, .effect:after
{
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
.effect:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

.message {
  background: #c7ecee;
}

</style>
`

const calcCss = document.createElement('template')
calcCss.innerHTML = /* css */`
<style>

button {
  outline: none;
  appearance: none;
  border: 0;
  border-radius: 0;
  background-color: transparent;
}
#calc-container {
  width: 300px;
  height: 350px;
  /*border: 2px solid black;*/
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
  padding: 1.65em 1.75em;
  position: relative;
  text-align: center;
}

.calc-buttons > *:active::before {
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
  content: "";
  opacity: 0.3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.function {
  background-color: #eee;
}

.equal {
  background-image: linear-gradient(to bottom, #B9F6CA, #69F0AE);
  grid-column: -2;
  grid-row: 2 / span 4;
}

.effect
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect:before, .effect:after
{
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:0;
    bottom:0;
    left:10px;
    right:10px;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
.effect:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}

</style>
`

export { memoryCss, dragCss, chatCss, calcCss }
