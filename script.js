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

function verifyWinner() {
  if (movePlayer1 == "stone" && movePlayer2 == "paper") {
    gameResult = 2;
  } else if (movePlayer1 == "stone" && movePlayer2 == "scissors") {
    gameResult = 1;
  } else if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    gameResult = 2;
  } else if (movePlayer1 == "paper" && movePlayer2 == "stone") {
    gameResult = 1;
  } else if (movePlayer1 == "scissors" && movePlayer2 == "stone") {
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

$rockButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img src="./rock.png" alt="Mão fechada" class="move-image">';
  movePlayer1 = "stone";
  verifyWinner();
});
$paperButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img src="./paper.png" alt="Mão aberta" class="move-image">';
  movePlayer1 = "paper";
  verifyWinner();
});
$scissorsButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML =
    '<img src="./scissors.png" alt="Mão fechada com os dedos indicador e médio levantados" class="move-image">';
  movePlayer1 = "scissors";
  verifyWinner();
});

$rockButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img src="./rock.png" alt="Mão fechada" class="move-image">';
  movePlayer2 = "stone";
  verifyWinner();
});
$paperButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img src="./paper.png" alt="Mão aberta" class="move-image">';
  movePlayer2 = "paper";
  verifyWinner();
});
$scissorsButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML =
    '<img src="./scissors.png" alt="Mão fechada com os dedos indicador e médio levantados" class="move-image">';
  movePlayer2 = "scissors";
  verifyWinner();
});
