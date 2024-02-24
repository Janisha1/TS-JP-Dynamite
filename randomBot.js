class Bot {
    makeMove(gamestate) {
        const lastRound = gamestate.rounds[gamestate.rounds.length - 1];
        const moves = ["R", "P", "S", "W"];
        if ((lastRound + 1) % 10 === 0 ) {
            return "D";
        }
        const potentialMove = moves[Math.floor(Math.random()* moves.length)];

        return potentialMove;
    }
}

module.exports = new Bot();