class Game {
    constructor(board, turn, player1, player2) {
        this.board = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        this.turn = turn || 1;
        this.player1 = player1 || new Player(1,1);
        this.player2 = player2 || new Player(2,2);
        this.winningCombos = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ];
    }

    checkPlayerTurn() {
        if (this.turn === 1) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    checkForWin() {
        var winComboMoves;
        for (var i = 0; i < this.winningCombos.length; i++) {
            winComboMoves = 0;
            for (var j = 0; j < 3; j++) {
                if (this.checkPlayerTurn().moves.includes(this.winningCombos[i][j])) {
                     winComboMoves++;
                }
                if (winComboMoves === 3) {
                    return true;
                }
            }
        }
        return false;
    }

    checkForDraw() {
        for (var i = 0; i < this.board.length; i++) {
            if (!this.board[i].includes(0)) {
                return !this.checkForWin() ;
            }
        }
        return false;
    }

    saveBoardToPlayerWins() {
        this[`player${turn}`][wins].push(this.board);
    }

    reset() {
        this.board = [];
    }

    saveBoardToStorage() {
        localStorage.setItem("board", JSON.stringify(this.board));
    }
}