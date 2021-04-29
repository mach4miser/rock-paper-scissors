"use strict";

let i = 0;
let playerPlay = prompt("Choose either rock, paper, or scissors").toLowerCase();
const computerChoice = computerPlay();
const push1 = document.getElementById("para");
const push2 = document.getElementById("para2");
const push3 = document.getElementById("para3");

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

push1.innerHTML = ("Computer choice: " + computerChoice);
push2.innerHTML = ("Player chooses: " + playerPlay);
push3.innerHTML = (playRound(computerChoice, playerPlay));

