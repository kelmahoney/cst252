/*
 * Author: Kelly Mahoney
 * Created: 3.15.2022
 * License: Public Domain
 */

function friendsCharacter(name) {
    // get length of name
    var len = name.length;
    // do a mod 6 to get friends
    var mod = len % 6;
    // if conditional to set friendsStr to friends
    var friendsStr;
    if (mod == 0) {
        friendsStr = "Rachel Green";
    } else if (mod == 1) {
        friendsStr = "Ross Geller";
    } else if (mod == 2) {
        friendsStr = "Joey Tribbiani";
    }else if (mod == 3) {
        friendsStr = "Phoebe Buffay";
    }else if (mod == 4) {
        friendsStr = "Monica Geller";
    }else if (mod == 5) {
        friendsStr = "Chandler Bing";
    }
    return friendsStr;
}

$("#my-button").click(function(){

  var name = $("#input").val()
  var friends = friendsCharacter(name);
  console.log(friends);
  $("#output").html("Congratulations your friends character is " + friends);

});
