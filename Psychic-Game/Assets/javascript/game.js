// Guess what I am thinking
// var initials
var wins = 0;
var losses = 0;
var guessesleft = 9;

// keypresses: give options of keys for the user to press
// Array that holds all guesses of a user
var guessesSoFar = [];
// userGuess is what key they press
var userGuess = null;
// letters: abcd
var alphabet = ["abcdefghijklmnopqrstuvwxyz".split()]
var letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

function reset() {
    guessesleft = 9;
    guessesSoFar = [];
}

document.onkeyup = function (events) {
    console.log(events.key);
    userGuess = events.key;
    if (userGuess == letterGuessed) {
        wins++;

        guessesleft = 9;
        guessesSoFar = [];
        
    } else {
guessesleft--;
guessesSoFar.push(userGuess);
if (guessesleft == 0) {
    losses++;
reset();
}




    }


    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("guessesleft").innerHTML = guessesleft
    document.getElementById("guessesSofar").innerHTML = guessesSoFar
}



