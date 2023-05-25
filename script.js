let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random * 9);
}

//  If both players are tied, the human user should win. Return true if the human player wins, and false if the computer player wins.

function compareGuesses(human, computer, number) {
    human === computer ? true : Math.abs(human - number) < Math.abs(computer - number);
}

function updateScore(winner) {
    winner === 'human' ? humanScore += 1 : computerScore += 1;
}

function advanceRound() {
    currentRoundNumber += 1;
}