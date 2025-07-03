const random = Math.round(Math.random() * 100 + 1);
console.log("Random Number:", random); // For debugging

const inputGuess = document.getElementById("userGuess");
const submit = document.getElementById("submitGuess");
const result = document.getElementById("feedback");
const prevGuess = document.getElementById("previousGuesses");
const guessesLeft = document.getElementById("guessesRemaining");
const restartBtn = document.getElementById("restartGame");

let numGuessL = 5;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function () {
    const guess = parseInt(inputGuess.value);
    console.log("User Guess:", guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    displayGuesses(guess);       // Log the guess and decrease counter
    checkGuess(guess);           // Check if it's correct

    // If that was the last allowed guess and the number was wrong
    if (numGuessL === 0 && guess !== random) {
      displayMessage(`💀 Game Over!! Random number was ${random}`);
      endGame();
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`🎉 Congratulations! You guessed it right. The number was ${random}`);
    endGame();
  } else if (guess < random) {
    displayMessage(`${guess} is too low!`);
  } else {
    displayMessage(`${guess} is too high!`);
  }
}

function displayGuesses(guess) {
  inputGuess.value = "";

  if (prevGuess.innerHTML === "None") {
    prevGuess.innerHTML = `${guess}`;
  } else {
    prevGuess.innerHTML += `, ${guess}`;
  }

  numGuessL--;
  guessesLeft.innerHTML = `${numGuessL}`;
}

function displayMessage(message) {
  result.innerHTML = `<p>${message}</p>`;
}

restartBtn.addEventListener("click", function () {
  window.location.reload();
});

function endGame() {
  inputGuess.disabled = true;
  submit.disabled = true;
}
