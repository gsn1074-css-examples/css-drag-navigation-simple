var button = document.getElementById("button");
var splash = document.getElementById("splash");

var start = button.style.top;
var end = start + 300;

window.onload = addListeners;

function addListeners() {
    button.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
    window.removeEventListener('mousemove', buttonMove, true);
}

function mouseDown(e) {
    window.addEventListener('mousemove', buttonMove, true);
}

function buttonMove(e) {

    if (e.clientY < end && e.clientY >= start) {
        button.style.top = e.clientY + 'px';
    }

    if (e.clientY >= end) {
        splash.classList.add("fadeOut");
    }
}