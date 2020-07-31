class Game {
    constructor(board, turn, player1, player2) {
        this.board = [];
        this.turn = turn || 1;
        this.player1 = player1 || new Player();
        this.player2 = player2 || new Player();
    }

    checkForWin() {
        if (this.board.includes(winCombos)) {
            return player.turn;
        }
        return "Draw!";
    }

    saveBoardToPlayerWins() {
        this[`player${turn}`][wins].push(this.board);
    }

    reset() {

    }

    saveBoardToStorage() {

    }

}