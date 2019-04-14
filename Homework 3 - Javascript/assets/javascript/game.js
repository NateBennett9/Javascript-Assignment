var letters = ["c", "a", "t", "d", "o", "g"];
var guessedLetters = [];
var totalGuesses = 10;
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var letterAnswer = null;

var appendGuessesLeft = function() {
    document.getElementById("guesses-left").textContent = guessesLeft;
  };

  var appendletterAnswer = function() {
    this.letterAnswer
 = this.letters[Math.floor(Math.random() * this.letters.length)];
  };

  var appendGuessesSoFar = function() {
    document.getElementById("guesses-so-far").textContent = guessedLetters.join(", ");
  };

  var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];
    appendletterAnswer();
    appendGuessesLeft();
    appendGuessesSoFar();
  };

appendletterAnswer();
appendGuessesLeft();
 
     document.onkeyup = function(event) {
       guessesLeft--;
 
       var letter = String.fromCharCode(event.keyCode).toLowerCase();
 
       guessedLetters.push(letter);
 
       appendGuessesLeft();
       appendGuessesSoFar();
 
       if (letter === letterAnswer
    ) {

         wins++;
         document.getElementById("wins").textContent = wins;
 
         reset();
       }
 
       if (guessesLeft === 0) {
 
         losses++;
         document.getElementById("losses").textContent = losses;

         reset();
       }
     };