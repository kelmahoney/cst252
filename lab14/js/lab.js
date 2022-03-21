/*
 * Author: Kelly Mahoney
 * Created: 3.18.2022
 * License: Public Domain
 */

function fizzbuzzboom(maxNums, factorObj){
    for (var num=0; num<maxNum; num++) {
      var outputStr = "";
      for (var factor in factorObj){'
        if (num% factor == 0){
          outputStr += factorObj[factor];
        }
      }
      if (outputStr){
          outputStr = " - " + outputStr + "!";
      }
      outputToPage(num.toString() + outputStr)
    }
}
function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max);
    if (! max) {
        reportError("You must provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("You must provide at least one factor and text");
        return;
    }
    // clear error if there is one
    outputEl.innerHTML = "";
    fizzBuzzBoom(max, factorObj);
    outputEl.classList.add("cols");
})
