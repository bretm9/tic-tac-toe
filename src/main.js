var newGame = new Game();
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
    loadGame();
    renderLoadedGame();   
}

function loadGame() {
    if (localStorage.board) {
        newGame = newGame.retrieveAllFromStorage(newGame.convertPlayers());
    } 
}

function renderLoadedGame() {
    renderSwitchTurn();
    for (var i = 0; i < boardItems.length; i++) {
        if (newGame.board[i] != "") {
            boardItems[i].firstElementChild.innerText = newGame.board[i];
        }
    }
    for (var i = 0; i < playerWins.length; i++) {
        playerWins[i].lastElementChild.innerText = `${newGame[`player${i}`].wins.length} wins`;
    }
}

function addTokenToCell(event) {
    if (event.target.firstElementChild.innerText === "") {    
        event.target.firstElementChild.innerText = newGame.getCurrentPlayer().token;
        newGame.getCurrentPlayer().moves.push(+event.target.dataset.position);
        newGame.board[event.target.dataset.position] = newGame.getCurrentPlayer().token; 
        newGame.updateGameState();
        renderGameState();
        newGame.saveAllToStorage();
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
        playerWins[newGame.turn].lastElementChild.innerText = `${newGame.getCurrentPlayer().wins.length} wins`;
        timeoutLength = 3000; 
    }
    return timeoutLength;
}

function renderSwitchTurn() {
        playerTurn.innerText = `Player ${newGame.getCurrentPlayer().token}'s turn`; 
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
    newGame.saveAllToStorage();
}