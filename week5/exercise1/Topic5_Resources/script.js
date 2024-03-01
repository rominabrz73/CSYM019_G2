function myClickFunction() {
  var element = document.getElementById("circle");
  //element.style.backgroundColor= 'blue';
  var circleOpacity = parseFloat(element.style.opacity);

  element.style.opacity = circleOpacity - 0.1;
}

function myLoadFunction() {
  var element = document.getElementById("circle");

 //element.addEventListener("click", myClickFunction);

 element.style.opacity = "1";
  var interval = setInterval( myClickFunction, 1000);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
