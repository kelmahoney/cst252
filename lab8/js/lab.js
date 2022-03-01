/*
 * Author: Kelly Mahoney
 * Created:   2.24.2022
 */



// is it even funtion
function isEven(x){
    return (x % 2 == 0);
 }

 //test Function
console.log("Is 1 Even? ", isEven(1));
console.log("Is 2 Even ", isEven(2));

array = [10, 28, 8, 2, 92, 80];
console.log("My array", array);

var result = array.map(isEven);


var result = array.map(function(x){
      return x % 2;
 })


 //output
document.writeln("is it even" + result);
