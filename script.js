const numberHeader = document.querySelector('h1');
const textHeader = document.querySelector('h2');
const openingText = document.querySelector('p');

const menuButton = document.querySelector('.menu-button');
const popupBar = document.querySelector('.popup-bar');


window.addEventListener('keydown', keyLog);
menuButton.addEventListener('click', addHeight);


function keyLog(event) {

    event.keyCode === 32
        ? textHeader.innerText = "Spacebar"
        : textHeader.innerText = event.key;

    numberHeader.innerText = event.keyCode;

    openingText.style.display = "none";
}

function addHeight() {
    popupBar.classList.toggle('height')
};

