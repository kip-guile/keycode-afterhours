const numberHeader = document.querySelector('h1');
const textHeader = document.querySelector('h2');


window.addEventListener('keydown', keyLog);


function keyLog (event) {
    numberHeader.innerText = event.keyCode;
}
