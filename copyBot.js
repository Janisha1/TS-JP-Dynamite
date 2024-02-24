class Bot {
    makeMove(gamestate) {
        if(gamestate.rounds.length === 0) {
            return "W";
        }
        const lastRound = gamestate.rounds[gamestate.rounds.length - 1];
        const lastOppositionMove = lastRound.p2;
        const winningMoves = {
            'R' : 'R'
            ,'P' : 'P'
            ,'S' : 'S'
            ,'D' : 'D'
            ,'W' :'W'
        }

        return winningMoves[lastOppositionMove];
    }
}

module.exports = new Bot();