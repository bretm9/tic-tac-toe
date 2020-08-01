class Game {
    constructor(board, turn, player1, player2) {
        this.board = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        this.turn = turn || 1;
        this.player1 = player1 || new Player();
        this.player2 = player2 || new Player();
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

    checkForWin() {
        for (var i = 0; i < 8; i++) {
            if (this[`player${turn}`][moves].includes(this.winningCombos[i])) {
                return player.turn;
            }
        }
        return "Draw!";
    }

    checkForFullBoard() {
        if (!this.board.includes(0)) {
            return true;
        }
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