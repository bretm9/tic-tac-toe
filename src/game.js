class Game {
    constructor(board, turn, player1, player2, gameState) {
        this.board = board || ["","","","","","","","",""];
        this.turn = turn || 0;
        this.player1 = player1 || new Player(1,"X");
        this.player2 = player2 || new Player(2,"O");
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

    checkCurrentPlayer() {
        if (this.turn === 0) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    updateGameState() {
        if (this.checkForWin()) {
            this.gameState = `Player ${this.checkCurrentPlayer().token} wins!`;
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
                if (this.checkCurrentPlayer().moves.includes(this.winningCombos[i][j])) {
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
        this.checkCurrentPlayer().wins.push(this.board);
    }

    reset() {
        this.board = ["","","","","","","","",""];
        this.player1.moves = [];
        this.player2.moves = [];
        this.gameState = "turn";
    }

    saveBoardToStorage() {
        localStorage.setItem("board", JSON.stringify(this.board));
    }

    saveTurnToStorage() {
        localStorage.setItem("turn", JSON.stringify(this.turn))
    }

    saveAllToStorage() {
        this.saveBoardToStorage();
        this.saveTurnToStorage();
        this.player1.savePlayerToStorage();
        this.player2.savePlayerToStorage();
    }
}