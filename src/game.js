class Game {
    constructor(board, turn, player0, player1, gameState) {
        this.board = board || ["","","","","","","","",""];
        this.turn = turn || 0;
        this.player0 = player0 || new Player(0,"X");
        this.player1 = player1 || new Player(1,"O");
        this.gameState = "turn";
        this.winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    }

    getCurrentPlayer() {
        if (this.turn === 0) {
            return this.player0;
        } else {
            return this.player1;
        }
    }

    updateGameState() {
        if (this.checkForWin()) {
            this.gameState = `Player ${this.getCurrentPlayer().token} wins!`;
        } else if (this.checkForDraw()) {
            this.gameState = "Draw!";
        } else {
            this.changeTurn();
            return this.gameState;
        }
    }

    changeTurn() {
        if (this.turn === 0) {
            this.turn++;
        } else {
            this.turn--;
        }
    }

    checkForWin() {
        var winComboMoves;
        for (var i = 0; i < this.winningCombos.length; i++) {
            winComboMoves = 0;
            for (var j = 0; j < 3; j++) {
                if (this.getCurrentPlayer().moves.includes(this.winningCombos[i][j])) {
                     winComboMoves++;
                }
                if (winComboMoves === 3) {
                    this.saveBoardToPlayerWins();
                    return true;
                }
            }
        }
        return false;
    }

    checkForDraw() {
        var boardCounter = 0;
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i] != "") {
                boardCounter++;
            }
        }
        if (boardCounter === 9 && !this.checkForWin()) {
            return true;
        }
        return false;
    }

    saveBoardToPlayerWins() {
        this.getCurrentPlayer().wins.push(this.board);
    }

    reset() {
        this.board = ["","","","","","","","",""];
        this.player0.moves = [];
        this.player1.moves = [];
        this.gameState = "turn";
    }

    saveToStorage(type) {
        localStorage.setItem(type, JSON.stringify(this[type]))
    }

    saveAllToStorage() {
        this.saveToStorage("board");
        this.saveToStorage("turn");
        this.player0.savePlayerToStorage();
        this.player1.savePlayerToStorage();
    }

    convertPlayers() {
        var retrievedPlayers = [];
        var convertedPlayers = [];
        for (var i = 0; i < 2; i++) {
            retrievedPlayers[i] = JSON.parse((localStorage.getItem(`player${i}`)));
            convertedPlayers[i] = new Player();
            convertedPlayers[i].retrievePlayerFromStorage(retrievedPlayers[i]);
        }
        return convertedPlayers;
    }

    retrieveAllFromStorage(convertedPlayers) {
        return new Game(
            JSON.parse(localStorage.getItem("board")),
            JSON.parse(localStorage.getItem("turn")),
            convertedPlayers[0],
            convertedPlayers[1]);
    }
}