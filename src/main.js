var players = document.querySelectorAll(".section-player");
var board = document.querySelector(".board");
var wins = document.querySelector(".wins");
// var gameOverOverlay = document.querySelector(".game-over-overlay");
var newGame;


window.addEventListener('load', doOnLoad);
board.addEventListener("click", addTokenToCell);

function addTokenToCell() {
    target.innerText = newGame.checkPlayerTurn().token;
}