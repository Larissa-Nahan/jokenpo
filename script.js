const $rockButtonP1 = document.querySelector(".button-rock-player-1");
const $paperButtonP1 = document.querySelector(".button-paper-player-1");
const $scissorsButtonP1 = document.querySelector(".button-scissors-player-1");
const $fieldPlayer1 = document.querySelector(".field-player-1");

const $rockButtonP2 = document.querySelector(".button-rock-player-2")
const $paperButtonP2 = document.querySelector(".button-paper-player-2")
const $scissorsButtonP2 = document.querySelector(".button-scissors-player-2")
const $fieldPlayer2 = document.querySelector(".field-player-2");

$rockButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./rock.png" class="move-image">';
});
$paperButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./paper.png" class="move-image">';
});
$scissorsButtonP1.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img src="./scissors.png" class="move-image">';
});

$rockButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img src="./rock.png" class="move-image">';
});
$paperButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img src="./paper.png" class="move-image">';
});
$scissorsButtonP2.addEventListener("click", function () {
  $fieldPlayer2.innerHTML = '<img src="./scissors.png" class="move-image">';
});
