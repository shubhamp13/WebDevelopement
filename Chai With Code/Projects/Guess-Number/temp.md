const form = document.querySelector('form');
let randomNumber = parseInt((Math.random() \* 100) + 1);
let userInput = document.querySelector('#num');
let submit = document.querySelector("#sbt");
let guesses = document.querySelector('.guesses');
let remainingGuesses = document.querySelector('.remainingGuesses');
const lowOrHi = document.querySelector('.lowOrHi');
const res = document.querySelector('.result');
let previousGuesses = [];
let noOfGuesses = 0;
let playGame = true;
const p = document.createElement('p');
console.log(randomNumber);

// Event listener for the form submission
if (playGame) {
submit.addEventListener('click', function (e) {
e.preventDefault();
const guess = parseInt(userInput.value);
validateGuess(guess);
});
}

function validateGuess(guess) {
if (isNaN(guess)) {
alert('Please enter a valid number');
} else if (guess < 1) {
alert('Please enter a number greater than 1');
} else if (guess > 100) {
alert('Please enter a number less than 100');
} else {
previousGuesses.push(guess);
noOfGuesses++;
displayGuess(guess);
checkGuess(guess);
}
}

function checkGuess(guess) {
if (guess === randomNumber) {
displayMessage(`You guessed it right in ${noOfGuesses} attempts!`);
endGame();
} else if (guess < randomNumber) {
displayMessage("Number is too low");
} else if (guess > randomNumber) {
displayMessage("Number is too high");
}

    if (noOfGuesses >= 10 && guess !== randomNumber) {
        displayMessage(`Game Over! The random number was ${randomNumber}`);
        endGame();
    }

}

function displayMessage(message) {
lowOrHi.innerHTML = `<h2 class='one'>${message}</h2>`;
}

function displayGuess(guess) {
userInput.value = '';
guesses.innerHTML += `${guess}, `;
remainingGuesses.innerHTML = `${10 - noOfGuesses}`;
}

function newGame() {
const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener('click', function (e) {
randomNumber = parseInt((Math.random() \* 100) + 1);
noOfGuesses = 0;
previousGuesses = [];
guesses.innerHTML = '';
lowOrHi.innerHTML = '';
res.removeChild(p);
remainingGuesses.innerHTML = `${10 - noOfGuesses}`;
userInput.removeAttribute('disabled');
playGame = true;
});
}

function endGame() {
userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = `<button class="new-game">Start New Game</button>`;
res.appendChild(p);
playGame = false;
newGame();
}
