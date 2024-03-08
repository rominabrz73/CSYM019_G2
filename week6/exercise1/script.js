function myKeyDown(event) {
  var element = document.getElementById("circle");
  console.log(event.keyCode);
if(event.keyCode == 37){
 
  var positionLeft = element.offsetLeft;
  element.style.left=positionLeft - 10 +  'px';

}
if(event.keyCode == 39){
 
  var positionLeft = element.offsetLeft;
  element.style.left=positionLeft + 10 +  'px';

}
}



document.addEventListener('keydown', myKeyDown);



