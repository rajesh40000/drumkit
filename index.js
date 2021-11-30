// display the length of the button
var numberofbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofbutton; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);    //calling of the sound of the button.
      buttonanimation(buttonInnerHTML) // calling of the function to add animation in the button 

   });
}
document.addEventListener("keypress", function (event) {
   makesound(event.key);
   buttonanimation(event.key)    // calling of the function to add the animation of the button.
})

function makesound(key) {
   switch (key) {
      case "w":                                        // create a function to add sound in the button.
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

      case "a":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;
      case "s":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
      case "d":
         var tom1 = new Audio("sounds/tom-1.mp3");                  // these are adding sound in the button 
         tom1.play();
         break;
      case "j":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
      case "k":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
      case "l":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;


      default: console.log(buttonInnerHTML);

   }
}
function buttonanimation(currentkey) {                // A new function taken for add the animation in the button.
   var activebutton = document.querySelector("." + currentkey);
   activebutton.classList.add("pressed");
   setTimeout(function(){
      activebutton.classList.remove("pressed");     // this function has taken for set the time animation in the button
   }, 100);                                          // 100 is the taken for 1 second
}

