// Rock, Paper, Scissors game assignment for The Odin Project by Radraman.

const gameOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

//Lets get the computer to select its choice.
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return gameOptions[index];
}

//Game logic and score distribution
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "Its a tie";
  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore += 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore += 1;
    return "You Won! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore += 1;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore += 1;
    return "You Won! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore += 1;
    return "You Won! Scissors beats Paper";
  }
}

function game() {
  for (let count = 1; count <= 5; count++) {
    console.log(`Current Round : ${count}`);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice: Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
}

function declareWinner() {
  if (playerScore > computerScore) return "Good game, You are the Winner!!";
  else if (playerScore < computerScore)
    return "Bad Luck, Computer is the Winner!!";
  else return "The game was a TIE.";
}

//Let's Play
game();
console.log(declareWinner());
