const form = document.querySelector('form');
const userInput = document.querySelector('#num');
const submit = document.querySelector('#sbt');
const guessDisplay = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.remainingGuesses');
const result = document.querySelector('.result');
const lowOrHigh = document.querySelector('.lowOrHi');
let guessList = [];
let countOfGuesses = 0;
let randomNumber = parseInt((Math.random() * 100) + 1);
const button = document.createElement('button');
console.log(randomNumber);
let gameState = true;

if (gameState) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    //This will validate the given user input guess is between 1 to 100 only
    if (guess < 1) {
        alert("Please Enter Valid Number from Range 1 to 100 only!!!!!");
    }
    else if (guess > 100) {
        alert("Please Enter Valid Number from Range 1 to 100 only!!!!!");
    }
    else if (isNaN(guess)) {
        alert("Please Enter Valid Number from Range 1 to 100 only!!!!!");
    }
    else {
        countOfGuesses++;
        guessList.push(guess);
        displayGuessList(guess);
        checkGuessMatch(guess);
    }
}
function checkGuessMatch(guess) {
    if (guess === randomNumber) {
        displayFinalMessage(`You Have Gueesed ${guess} in ${countOfGuesses} attempts`);
        endGame();

    }
    else if (guess < randomNumber) {
        displayFinalMessage('Number Is too small');
    }
    else if (guess > randomNumber) {
        displayFinalMessage('Number is too Large');
    }
    if (countOfGuesses > 10) {
        displayFinalMessage(`Game Over! The random number was ${randomNumber}`);
        endGame();
    }
}
function displayGuessList(guess) {
    userInput.value = '';
    guessDisplay.innerHTML += `${guess}  `;
    remainingGuesses.innerHTML = `${10 - countOfGuesses}`;

}
function displayFinalMessage(message) {
    lowOrHigh.innerHTML = message;

}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    button.classList = 'new-game';
    button.innerHTML = `Start New Game`;
    result.appendChild(button);
    gameState = false;
    startGame();
}
function startGame() {
    const startGame = document.querySelector('.new-game');
    startGame.addEventListener('click', function (e) {
        e.preventDefault();
        guessList = [];
        countOfGuesses = 0;
        randomNumber = parseInt((Math.random() * 100) + 1);
        lowOrHigh.innerHTML = '';
        result.removeChild(button);
        guessDisplay.innerHTML = '';
        remainingGuesses.innerHTML = `${10 - countOfGuesses}`;
        userInput.removeAttribute('disabled');
        gameState = true;

    });
}
