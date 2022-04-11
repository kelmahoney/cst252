/*
 * Author: Kelly Mahoney
 * Created: 4.10.2022
 * License: Public Domain
 */
 // Create a object constructor called "vehicle" that takes "make", "model", "year" and "color" as parameters and stores this.
 class Vehicle {
   constructor(make, model, year, color){
     this.make = make;
     this.model = model;
     this.year = year;
     this.color = color;
          }
     // Add a method info()
     info (){
         // brings up an appropriate alert box " "
         return (" The vehicle is a " +
         this.make + " " +
         this.model + " year " +
         this.year + " and color " +
         this.color + ".");
     }
 }

 //make, model, year, color objects
 var car = new Vehicle("Toyota", "Prius", 2012, "white");
 var bike = new Vehicle("Huffy", "Good Vibrations", 2008, "orange");
 var shoes = new Vehicle("Converse", "High Tops", 2019, "white");


 // output
 $("#output").append("<p>" + car.info() + "</p>");
 $("#output").append("<p>" + bike.info() + "</p>");
 $("#output").append("<p>" + shoes.info() + "</p>");
