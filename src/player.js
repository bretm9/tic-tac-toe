class Player {
    constructor(id, token, wins) {
        this.id = id;
        this.token = token;
        this.wins = wins || [];
    }

    saveWinsFromStorage() {
        localStorage.setItem(`player-${id}-wins`, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        localStorage.getItem(`player-${id}-wins`);
    }

}