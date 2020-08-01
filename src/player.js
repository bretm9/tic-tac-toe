class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
    }

    saveWinsFromStorage() {
        localStorage.setItem(`player-${id}-wins`, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        localStorage.getItem(`player-${id}-wins`);
    }

}