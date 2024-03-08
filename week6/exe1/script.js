var intervalId; // Global variable to store the interval ID

function moveUp() {
  var element = document.getElementById("circle");
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 10 + "px";
}

function moveDown() {
  var element = document.getElementById("circle");
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 10 + "px";
}

function moveRight() {
  var element = document.getElementById("circle");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 10 + "px";
}

function moveLeft() {
  var element = document.getElementById("circle");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + "px";
}

function myKeyDown(event) {
  console.log(event.keyCode);
  if (event.keyCode == 37) {
    intervalId = setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    intervalId = setInterval(moveUp, 10);
  }
  if (event.keyCode == 39) {
    intervalId = setInterval(moveRight, 10);
  }
  if (event.keyCode == 40) {
    intervalId = setInterval(moveDown, 10);
  }
}

function myKeyUp() {
  clearInterval(intervalId); // Clear the interval when the key is released
}

function myLoadFunction() {
  document.addEventListener("keydown", myKeyDown);
  document.addEventListener("keyup", myKeyUp);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
