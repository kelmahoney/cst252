/*
 * Author: Kelly Mahoney
 * Created: 3.6.2022
 * License: Public Domain
 */

function sortUserName() {
//split string to array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
// join array back to a string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
  }


// find
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// form
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add event listener
buttonEl.addEventListener("click", function(){
// get value
var nameArraySort = inputEl.value;
// modify
var nameSort = sortUserName(reorderUserName(nameArraySort));
// value in output
outputEl.innerHTML = "<p id=name-results>" + nameSorted + "</p>";
});
