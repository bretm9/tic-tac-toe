class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
    }

    savePlayerToStorage() {
        localStorage.setItem(`player-${this.id}`, JSON.stringify(this));
    }

    retrievePlayerFromStorage() {
        return JSON.parse(localStorage.getItem(`player-1`));
    } 

}