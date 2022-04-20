const $rockButtonP1 = document.querySelector(".button-rock-player-1");
const $paperButtonP1 = document.querySelector(".button-paper-player-1");
const $scissorsButtonP1 = document.querySelector(".button-scissors-player-1");
const $fieldPlayer1 = document.querySelector(".field-player-1");
let movePlayer1 = "";

const $rockButtonP2 = document.querySelector(".button-rock-player-2");
const $paperButtonP2 = document.querySelector(".button-paper-player-2");
const $scissorsButtonP2 = document.querySelector(".button-scissors-player-2");
const $fieldPlayer2 = document.querySelector(".field-player-2");
let movePlayer2 = "";

const $winnerTitle = document.querySelector(".winner-title");
let gameResult = null;

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");
let scorePlayer1 = 0;
let scorePlayer2 = 0;

const $buttonReset = document.querySelector(".button-reset");
const $buttonStart = document.querySelector(".button-start");
let gameStart = false;

function verifyWinner() {
  if (movePlayer1 == "rock" && movePlayer2 == "paper") {
    gameResult = 2;
  } else if (movePlayer1 == "rock" && movePlayer2 == "scissors") {
    gameResult = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    gameResult = 2;
  } else if (movePlayer1 == "paper" && movePlayer2 == "rock") {
    gameResult = 1;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "rock") {
    gameResult = 2;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    gameResult = 1;
  } else if (movePlayer1 == movePlayer2) {
    gameResult = 0;
  }

  printGameResult();
}

function printGameResult() {
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empatou!";
  } else if (gameResult == 1) {
    $winnerTitle.innerHTML = "Jogadora 1 ganhou!";
  } else if (gameResult == 2) {
    $winnerTitle.innerHTML = "Jogadora 2 ganhou!";
  }
}

function resetBattleFiel() {
  $fieldPlayer1.innerHTML = "";
  $fieldPlayer2.innerHTML = "";
  $winnerTitle.innerHTML = "Resultado";
}

function resetMoveVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
}

function resetScoresVariables() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function printScoreBoard() {
  if (scorePlayer1 < 10) {
    $scorePlayer1.innerHTML = "0" + scorePlayer1;
  } else {
    $scorePlayer1.innerHTML = scorePlayer1;
  }
  if (scorePlayer2 < 10) {
    $scorePlayer2.innerHTML = "0" + scorePlayer2;
  } else {
    $scorePlayer2.innerHTML = scorePlayer2;
  }
}

function addPoint(winnerNumber) {
  if (winnerNumber == 1) {
    scorePlayer1++;
  }
  if (winnerNumber == 2) {
    scorePlayer2++;
  }
  printScoreBoard();
}

function resetScoreBoard() {
  $scorePlayer1.innerHTML = "00";
  $scorePlayer2.innerHTML = "00";
}

function move(moveName, fieldNumber) {
  if (gameStart) {
    if (fieldNumber == 1) {
      $fieldPlayer1.innerHTML =
        '<img src="./' + moveName + '.png" class="move-image">';
      movePlayer1 = moveName;
    } else {
      $fieldPlayer2.innerHTML =
        '<img src="./' + moveName + '.png" class="move-image">';
      movePlayer2 = moveName;
    }
    verifyWinner();
    if (gameResult != null) {
      setTimeout(resetBattleFiel, 2000);
      resetMoveVariables();
      addPoint(gameResult);
      gameResult = null;
    }
  }
}

$rockButtonP1.addEventListener("click", function () {
  move("rock", 1);
});
$paperButtonP1.addEventListener("click", function () {
  move("paper", 1);
});
$scissorsButtonP1.addEventListener("click", function () {
  move("scissors", 1);
});

$rockButtonP2.addEventListener("click", function () {
  move("rock", 2);
});
$paperButtonP2.addEventListener("click", function () {
  move("paper", 2);
});
$scissorsButtonP2.addEventListener("click", function () {
  move("scissors", 2);
});

$buttonReset.addEventListener("click", function () {
  resetBattleFiel();
  resetMoveVariables();
  resetScoreBoard();
  resetScoresVariables();
  gameResult = null;
});

$buttonStart.addEventListener("click", function () {
  gameStart = !gameStart;
  $buttonStart.classList.toggle("start");

  // if (!gameStart) {
  //   gameStart = true;
  //   $buttonStart.classList.add("start");
  // } else {
  //   gameStart = false;
  //   $buttonStart.classList.remove("start");
  // }
});
