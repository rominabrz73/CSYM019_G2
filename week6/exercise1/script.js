var myVariable = 0;

function myClickEvent() {
  myVariable = myVariable + 1;
  console.log(myVariable);
}

function myLoadFunction() {
  document.addEventListener("click", myClickEvent);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
