var winCount = 1;
var lossCount = 1;
var guessesRemaining = 10;
var guessedLetters = [];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];




document.onkeyup = function(event) {

    var userChoice = event.key;

    var regexp = /[a-z]/gi;

    if (!regexp.test(userChoice)) {

        alert("please enter a letter");
    } else {;
    }

    if (guessesRemaining <= 0) {

        document.getElementById("lossCount").innerHTML = lossCount++;
        console.log("Try again!");
        alert("Try again!");

        guessesRemaining = 10;

        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        document.getElementById("guessesRemaining").innerHTML = 10;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
    }



    if (computerChoice === userChoice) {

        console.log("You won!");
        alert("You won!");

        document.getElementById("winCount").innerHTML = winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = 10;

    } else {

        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}