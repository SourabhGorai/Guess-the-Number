const random = Math.round(Math.random() * 100 + 1);

const inputGuess = document.getElementById("userGuess");
const submit = document.getElementById("submitGuess");
const result = document.getElementById("feedback");
const prevGuess = document.getElementById("previousGuesses");
const guessesLeft = document.getElementById("guessesRemaining");
const restartBtn = document.getElementById("restartGame");

// let prevGuessesArr = [];
let numGuessL = 5;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    // e.preventDefault();
    const guess = parseInt(inputGuess.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a valid number");
  } else {
    if (numGuessL < 0) {
      displayGuesses(guess);
      displayMessage(`💀 Game Over!! Random number was ${random}`);
      endGame();
    } else {
    //   prevGuessesArr.push(guess);
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(
      `🎉 Congratulations! You guessed it right. The number was ${random}`
    );
    endGame();
  } else if (guess < random) {
    displayMessage(`${guess} < ?`);
  } else {
    displayMessage(`${guess} > ?`);
  }
}

function displayGuesses(guess) {
  inputGuess.value = "";
  
  if(prevGuess.innerHTML === "None"){
    prevGuess.innerHTML = `${guess}`;
  }else{
    prevGuess.innerHTML += `, ${guess}`;
  }
  numGuessL--;
  guessesLeft.innerHTML = `${numGuessL}`;
}

function displayMessage(message) {
  result.innerHTML = `<p>${message}</p>`;
}

restartBtn.addEventListener("click", function () {
  window.location.reload(); // simple page reload to reset state
});

// End game: disable input and show restart
function endGame() {
  inputGuess.disabled = true;
  submit.disabled = true;
//   restartBtn.style.display = "inline-block";
}
