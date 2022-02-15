// Summary: To show information about my car and its age
// Description: Using Javascript to show information about my car
// @author Kelly Mahoney
// @since  2.15.22

// define variables
var myTransport = ["Prius", "Bike", "riding with friends", "Bus"
      ];
var myMainRide = {
      make : "Prius",
      model : "Toyota",
      color : "white",
      year : 2012,
      age : function() {
          return 2022 - age;
      }
}


// output
document.writeln("Kinds of Transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
