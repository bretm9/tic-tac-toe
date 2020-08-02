var newGame;
var players = document.querySelectorAll(".section-player");
var board = document.querySelector(".board");
var wins = document.querySelector(".wins");
var playerTurn = document.querySelector(".player-turn");

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
        renderGameState();
    }
}

function renderGameState() {
    if (newGame.gameState === "Wins!") {
        playerTurn.innerText = `Player ${newGame.checkCurrentPlayer().id} wins!`;
        players[newGame.turn].firstElementChild.lastElementChild.innerText = `${newGame.checkCurrentPlayer().wins.length} wins`;
    } else if (newGame.gameState === "Draw!"){
        playerTurn.innerText = "Draw!";
    } else {
        playerTurn.innerText = `Player ${newGame.checkCurrentPlayer().id}'s turn`;
    }
}

