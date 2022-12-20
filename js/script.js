// declaring variables for score
playerScore = 0
computerScore = 0

// create a function for computer choice
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}

// create function of the game
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Draw! Try Again!";
    }
    else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerScore++;
            return "You Win! Paper beats rock!";
        } else {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection === 'paper') {
        if (playerSelection === 'scissors') {
            playerScore++;
            return "You Win! Scissors beat Paper";
        } else {
            computerScore++;
            return "You Lose! Paper beats Rock!";
        }
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore++;
            return "You Win! Rock beats Scissors!";
        } else {
            computerScore++;
            return "You Lose! Scissors beat Paper!";
        }
    }
}

// declaring buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playAgain = document.querySelector('#playAgain');

// function for the game
let description = document.querySelector('.description');
let resultDescription = document.querySelector('.resultDescription');
let hoomanScore = document.querySelector('.hoomanScore');
let robotScore = document.querySelector('.robotScore');

playAgain.disabled = true;

function playGame(pick) {
    computerSelection = getComputerChoice();

    resultDescription.textContent = playRound(pick, computerSelection);

    hoomanScore.textContent = "Human: " + playerScore;
    robotScore.textContent = "Robot: " + computerScore;

    if (playerScore === 5) {
        description.textContent = 'Congratulations! You Win!'
        resultDescription.textContent = '';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
    } else if (computerScore === 5) {
        description.textContent = 'You Lose! Better Luck Next Time!';
        resultDescription.textContent = '';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playAgain.disabled = false;
    }
}

// function to play again
playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    description.textContent = 'Choose your play';
    resultDescription.textContent = '';
    hoomanScore.textContent = "Human: " + playerScore;
    robotScore.textContent = "Computer: " + computerScore;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playAgain.disabled = true;
})

// event listeners to choose a play
rockBtn.addEventListener('click', () => {
    playGame('rock');
});

paperBtn.addEventListener('click', () => {
    playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors');
});