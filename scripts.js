"use strict";

let i = 0;
let playerPlay = '';
const computerChoice = computerPlay();
const winner = document.querySelector('#container-item-4');
const buttons = document.querySelectorAll('a');
const content = document.createElement('p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

rock.addEventListener('click', function(e) {
  playerPlay = 'rock';
  computerPlay();
  playRound();
  winner.appendChild(content);
  console.log(playRound());
  console.log(computerPlay());
  console.log(playerPlay);
  content.classList.add('content');
  content.innerHTML = ("Computer choice: "+ computerPlay() + '<br />' +
                       "Player choice: Rock " + '<br />' + playRound());
  content.style.textAlign = 'center';  
});

paper.addEventListener('click', function(e) {
  playerPlay = 'paper';
  computerPlay();
  playRound();
  console.log(playRound());
  console.log(computerPlay());
  console.log(playerPlay);
  winner.appendChild(content);
  content.classList.add('content');
  content.innerHTML = ("Computer choice: "+ computerPlay() + '<br />' +
                       "Player choice: Paper " + '<br />' + playRound());
  content.style.textAlign = 'center';  
});

scissors.addEventListener('click', function(e) {
  playerPlay = 'scissors';
  computerPlay();
  playRound();  
  console.log(computerPlay());
  console.log(playerPlay);
  console.log(playRound());
  winner.appendChild(content);
  content.classList.add('content');
  content.innerHTML = ("Computer choice: "+ computerPlay() + '<br />' +
                       "Player choice: Scissors " + '<br />' + playRound());
  content.style.textAlign = 'center';    
});

function playRound(computerPlay, playerPlay) {
  if (computerPlay == playerPlay){
    return "Its a tie!";
  } else if (computerPlay === "rock" && playerPlay === "scissors"){
    return "Computer wins this round!";
  } else if (computerPlay === "rock" && playerPlay === "paper"){
    return "Player wins this round!";
  } else if (computerPlay === "paper" && playerPlay === "scissors"){
    return "Player wins this round!";
  } else if (computerPlay === "paper" && playerPlay === "rock"){
    return "Computer wins this round!";
  } else if (computerPlay === "scissors" && playerPlay === "paper"){
    return "Computer wins this round!";
  } else if (computerPlay === "scissors" && playerPlay === "rock"){
    return "Player wins this round!";
  }  
}


