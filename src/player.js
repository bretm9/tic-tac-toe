class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
    }

    savePlayerToStorage() {
        localStorage.setItem(`player${this.id}`, JSON.stringify(this));
    }

    retrievePlayerFromStorage(object) {
        this.id = object.id;
        this.token = object.token;
        this.moves = object.moves;
        this.wins = object.wins;
    }
}