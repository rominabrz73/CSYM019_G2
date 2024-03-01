function myClickFunction() {
  var element = document.getElementById("circle");
  //element.style.backgroundColor= 'blue';
 // var circleOpacity = parseFloat(element.style.opacity);

 // element.style.opacity = circleOpacity - 0.1;
 var positionLeft = element.offsetLeft;
 element.style.left=positionLeft - 10 +  'px';
}

function myLoadFunction() {
  var element = document.getElementById("circle");

 element.addEventListener("click", myClickFunction);

 //element.style.opacity = "1";
//var interval = setInterval( myClickFunction, 1000);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
