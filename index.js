// Rock, Paper, Scissors game assignment for The Odin Project by Radraman.

//Let's declare all the variables
const computerChoiceDsiplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

//Get a choice from the user.

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    getComputerChoice();
    getResult();
  })
);

//Get a choice from the computer.
function getComputerChoice() {
  const randNum = Math.floor(Math.random() * possibleChoices.length);

  if (randNum === 0) computerChoice = "rock";
  else if (randNum === 1) computerChoice = "paper";
  else computerChoice = "scissors";

  computerChoiceDsiplay.textContent = computerChoice;
}

//Game Logic and score distribution.
function getResult() {
  if (userChoice === computerChoice) result = "Draw.";
  if (userChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    result = "You Lose! Paper beats Rock.";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    playerScore += 1;
    result = "You Won! Rock beats Scissors";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    playerScore += 1;
    result = "You Won! Paper beats Rock";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    result = "You Lose! Scissors beats Paper";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    playerScore += 1;
    result = "You Won! Scissors beats Paper";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    result = "You Lose! Rock beats Scissors";
  }
  resultDisplay.textContent = result;
  userScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
