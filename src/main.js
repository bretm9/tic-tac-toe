var newGame;
var players = document.querySelectorAll(".section-player");
var board = document.querySelector(".board");
var wins = document.querySelector(".wins");
var playerTurn = document.querySelector(".player-turn");
var unclickableOverlay = document.querySelector(".unclickable-overlay");

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
    if (newGame.gameState != "turn") {
        unclickableOverlay.classList.toggle("hidden");
        newGame.reset();
    }
}

function renderGameState() {
    var timeoutLength = 0;
    if (newGame.gameState != "turn") {
        playerTurn.innerText = newGame.gameState;
        unclickableOverlay.classList.toggle("hidden");
        timeoutLength = 3000;
        timer(timeoutLength);
    }
}


function timer(timeoutLength) {
    setTimeout(function() {
        resetGridItems();
        playerTurn.innerText = `Player ${newGame.checkCurrentPlayer().id}'s turn`;
    }, 
    timeoutLength);
}

function resetGridItems() {
    var gridDivs = board.childNodes;
    for (var i = 0; i < gridDivs.length; i++) {
        gridDivs[i].innerText = "";
    }
}