class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
    }

    savePlayeToStorage() {
        localStorage.setItem(`player-${id}`, JSON.stringify(this));
    }

    retrievePlayerFromStorage() {
        localStorage.getItem(`player-${id}`);
    }

}