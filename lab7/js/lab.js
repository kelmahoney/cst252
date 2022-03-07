/**
 * Author: Kelly Mahoney
 * Created:   2.22.2022
 **/

// sortUserName - is a function that sorts the letters of a name
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

 //output
 document.writeln("Your new name is: ",
      sortUserName(), "</br>");
