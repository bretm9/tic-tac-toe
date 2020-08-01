var players = document.querySelectorAll(".section-player");
var board = document.querySelector(".board");
var wins = document.querySelector(".wins");
// var gameOverOverlay = document.querySelector(".game-over-overlay");
var newGame;

window.addEventListener("load", doOnLoad);
board.addEventListener("click", addTokenToCell);

function doOnLoad() {
    if (localStorage === undefined) {
        newGame = new Game();
    } else {
        newGame = new Game(localStorage.getItem("board"), localStorage.getItem("turn"), localStorage.getItem("player-1"), localStorage.getItem("player-2"));
    }
}

function addTokenToCell(event) {
    if (event.target.innerText === "") {    
        event.target.innerText = newGame.checkCurrentPlayer().token;
        newGame.checkCurrentPlayer().moves.push(+event.target.dataset.position);
        newGame.board[event.target.dataset.position] = newGame.checkCurrentPlayer().id; 
        newGame.updateGameState();
    }
}