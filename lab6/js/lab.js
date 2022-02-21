// Summary: To show information about my car and its age
// Description: Using Javascript to show information about my car
// @author Kelly Mahoney
// @since  2.15.22

// define variables
var myTransport = ["Prius", "Bike", "riding with friends", "Bus"
      ];
var myMainRide = {
      make : "Toyota",
      model : "Prius",
      color : "White",
      year : 2012,
      age : function() {
          return 2022 - year;
      }
}


// output
document.writeln("Kinds of Transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
