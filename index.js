// var buttons = document.querySelectorAll(".drum");
// for(var i = 0; i < buttons.length; i++){
//   // buttons[i].style.color = "white";
// //  buttons[i].addEventListener("click", handlerClick);
//   buttons[i].addEventListener("click",function(){
//     console.log(this);
//   })
// }

var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
    var innerLetter = this.innerHTML;
    makeSound(innerLetter);
    buttonAnimation(innerLetter);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case ("w"):
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case ("a"):
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case ("s"):
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case ("d"):
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case ("j"):
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case ("k"):
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case ("l"):
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(key);
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
// function handlerClick(){
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
