/*
 * Author: Kelly Mahoney
 * Created:   3.1.2022
 */

// assigned to variable
var oneEl = document.getElementById("output");
var twoEl = document.createElement("button");
// find the variable
oneEl.appendChild(twoEl);

twoEl.id = "button";

twoEl.innerHTML = "CLICK ME?";
//output
twoEl.addEventListener("click", () => {
      alert ("congratulations you clicked the button");
});
