/*
 * Author: Kelly Mahoney
 * Created: 3.18.2022
 * License: Public Domain
 */

for ( i = 1; i <= 200; i++) {
     var buildStr = "";


     // If the number is a multiple of 7,
     // print “Boom” instead of the number.
     if (i % 10 == 0) {
         buildStr += "Boom";
     }
     // If the number is a multiple of 5,
     // print “Buzz” instead of the number.
     if (i % 6 == 0) {
         buildStr += "Buzz";
     }
     // If the number is a multiple of 3,
     // print “Fizz” instead of the number.
     if (i % 2 == 0) {
         buildStr += "Fizz";
     }

     if (buildStr != "") {
         console.log(buildStr + "!");
         $("#output").append("<p>" + buildStr + "!");
     }
     else {
         console.log(i);
         $("#output").append("<p>" + i)
     }
   }
