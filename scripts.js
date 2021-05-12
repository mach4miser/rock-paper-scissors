"use strict";

let i = 0;

const computerChoice = computerPlay();


// create function that will create a random return on computer answer using a for loop
function computerPlay() {
  for (i = 0; i < Math.ceil(Math.random() * 3); i++){  

  }
  if (i === 1) {
      return 'rock';
    } else if (i === 2) {
      return 'paper';
    } else if (i === 3) {
      return 'scissors';
    }
}


// Create function that will compare outcome between computer and player choice
function playRound(computerChoice, playerPlay) {
  if (computerChoice == playerPlay){
    return "Its a tie!";
  } else if (computerChoice === "rock" && playerPlay === "scissors"){
    return "Computer wins this round!";
  } else if (computerChoice === "rock" && playerPlay === "paper"){
    return "Player wins this round!";
  } else if (computerChoice === "paper" && playerPlay === "scissors"){
    return "Player wins this round!";
  } else if (computerChoice === "paper" && playerPlay === "rock"){
    return "Computer wins this round!";
  } else if (computerChoice === "scissors" && playerPlay === "paper"){
    return "Computer wins this round!";
  } else if (computerChoice === "scissors" && playerPlay === "rock"){
    return "Player wins this round!";
  }  else {
    return "You entered the wrong thing";
  }
}



