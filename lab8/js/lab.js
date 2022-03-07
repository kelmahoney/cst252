/*
 * Author: Kelly Mahoney
 * Created:   2.24.2022
 */

 function isOdd(x){
     return (x % 2 !== 0);
   }
//test
console.log("Is 1 Odd? ", isOdd(1));
console.log("Is 2 Odd? ", isOdd(2));


array = [11,10, 28, 8, 2, 92, 80];
console.log("My array", array);
// is it odd funtion

var result = array.map(isOdd);
console.log("Test of Oddness of array:", result);

var result = array.map(function (x){
      return x * 2;
 })

console.log("Array mulitplied by 2:",result);

 //output
 function main(){
   outputElement = document.getElementById("js-output");
   outputElement.innerHTML = array.map(isOdd);
}
