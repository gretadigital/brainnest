function computerPlay(rock = 'rock', paper = 'paper', scissors = 'scissors') {
  if (Math.floor(Math.random() * 2) + 1 === 1) {
    return rock;
  } else if (Math.floor(Math.random() * 2) + 1 === 2) {
    return paper;
  } else {
    return scissors;
  }
}

let playerSelection = prompt('Choose rock, paper or scissors');
let computerSelection = computerPlay();

playerSelection = playerSelection.toLowerCase();

function gamePlay() {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return `You both selected ${playerSelection}, it's a tie!`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `${playerSelection} beats ${computerSelection}. You win!`;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return `You both selected ${playerSelection}, it's a tie!`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return `${playerSelection} beats ${computerSelection}. You win!`;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    return `You both selected ${playerSelection}, it's a tie!`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return `${computerSelection} beats ${playerSelection}. You lose!`;
  } else {
    return `${playerSelection} beats ${computerSelection}. You win!`;
  }
}

console.log(gamePlay());
