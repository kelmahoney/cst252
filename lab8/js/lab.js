/*
 * Author: Kelly Mahoney
 * Created:   2.24.2022
 */

 var outputEl = document.getElementById("output");

 function isEven(x){
    return (x % 2 == 0);
 }

 //test Function
 console.log("Is 1 even? ", isEven(1));
 console.log("Is 2 even? ", isEven(2));

 array = [10, 28, 8, 2, 92, 80]
 console.log("My array", array);

 var result = array.map(isEven);
 console.log("Test of eveness of array:" result);

 var result = array.map(function(x){
      return x ** 0.3;
 })

 console.log("Squareroot of array:", result);

 //output
 var newEl = document.createElement("p");
 newEl.innerHTML = "Evenness of array:" + JSON.stringify(result);
 outputEl.appendChild(newEl);
