/*
 * Author: Kelly Mahoney
 * Created: 3.13.2022
 * License: Public Domain
 */

 // find up button and add click handler
$("#up-button").click(function(){
	// remove all class but up
  $("#the-text").removeClass("down","left","right");
	// toggle up class for text
  $("#the-text").toggleClass("up");
})


// find down button and add click handler
$("#down-button").click(function(){
	// remove all class but down
  $("#the-text").removeClass("left","up","right");
	// toggle down class for text
  $("#the-text").toggleClass("down");
})

 // find left button and add click handler
$("#left-button").click(function(){
	// remove all class but left
  $("#the-text").removeClass("up","right","down");
	// toggle left class for text
  $("#the-text").toggleClass("left");
})


// find right button and add click handler
$("#right-button").click(function(){
	// remove all class but right
  $("#the-text").removeClass("up","down","left");
	// toggle right class for text
  $("#the-text").toggleClass("right");
})
