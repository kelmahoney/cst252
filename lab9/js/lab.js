/*
 * Author: Kelly Mahoney
 * Created:   3.1.2022
 */


var oneEl = document.getElementById("output");
var twoEl = document.createElement("button");

oneEl.appendChild(twoEl);

twoEl.id = "button";

twoEl.innerHTML = "CLICK ME?";

twoEl.addEventListener("click", () => {
      alert ("congratulations you clicked the button");
});
