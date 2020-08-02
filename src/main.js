var newGame;
var playerWins = document.querySelectorAll(".player-header");
var boardItems = document.querySelectorAll(".div-grid-item");
var wins = document.querySelector(".wins");
var playerTurn = document.querySelector(".player-turn");
var unclickableOverlay = document.querySelector(".unclickable-overlay");

window.addEventListener("load", doOnLoad);
for (var i = 0; i < boardItems.length; i++) {
    boardItems[i].addEventListener("click", addTokenToCell);
}

function doOnLoad() {
    if (localStorage === undefined) {
        newGame = new Game();
    } else {
        newGame = new Game(localStorage.getItem("board"), localStorage.getItem("turn"), localStorage.getItem("player-1"), localStorage.getItem("player-2"));
    }
}

function addTokenToCell(event) {
    if (event.target.firstElementChild.innerText === "") {    
        event.target.firstElementChild.innerText = newGame.checkCurrentPlayer().token;
        newGame.checkCurrentPlayer().moves.push(+event.target.dataset.position);
        newGame.board[event.target.dataset.position] = newGame.checkCurrentPlayer().id; 
        newGame.updateGameState();
        renderGameState();
    }
}

function renderGameState() {
    var timeoutLength = 0;
    timeoutLength = checkGameState(timeoutLength);
    doNextAction(timeoutLength);
}

function checkGameState(timeoutLength) {
    if (newGame.gameState != "turn") {
        playerTurn.innerText = newGame.gameState;
        unclickableOverlay.classList.remove("hidden");
        playerWins[newGame.turn].lastElementChild.innerText = `${newGame.checkCurrentPlayer().wins.length} wins`
        timeoutLength = 3000; 
    }
    return timeoutLength;
}

function renderSwitchTurn() {
        playerTurn.innerText = `Player ${newGame.checkCurrentPlayer().id}'s turn`; 
}

function doNextAction(timeoutLength) {
    setTimeout(function() {
        if (newGame.gameState != "turn") {
            resetGrid();
        }
        renderSwitchTurn();
    }, timeoutLength);
}

function resetGrid() {
    newGame.reset();
    unclickableOverlay.classList.add("hidden");
    for (var i = 0; i < boardItems.length; i++) {
        boardItems[i].firstElementChild.innerText = "";
    }
}