/*
 * Author: Kelly Mahoney
 * Created: 4.26.2022
 * License: Public Domain
 (c) http://numbersapi.com/#random/trivia
*/

function showNumber(str) {
       document.getElementById('number-fact').innerText = str;
   }

   (function() {
       var scriptTag = document.createElement('script');
       scriptTag.async = true;
       scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
       document.body.appendChild(scriptTag);
   })();

$.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
    $('#number').text(data);
});
