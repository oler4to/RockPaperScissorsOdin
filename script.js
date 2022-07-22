const game = document.querySelector('#game');
const buttons = document.querySelector('button');

const playResult = document.querySelector('.result');
const score = document.querySelector('.score');
const endResult = document.querySelector('.endResult');

let computerSelection = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  let random = (Math.floor(Math.random() * computerSelection.length));
  
  if (random == 0){
    computerSelection = "Rock";
  } else if (random == 1){
    computerSelection = "Paper";
  } else if(random == 2){
    computerSelection = "Scissors";
  }
  return computerSelection.toLowerCase();
}

computerPlay();

function playRound(input){
  if(input == computerSelection){
    console.log("You guys tied!");
  } else if ((input == "Rock" && computerSelection== "Scissors")||(input == "Paper" && computerSelection == "Rock")||(input == "Scissors" && computerSelection == "Paper")){
    console.log("Yes! KEEP GOING!");
  }
}
let playerSelection = (prompt("Your Fighter")).toLowerCase();
playRound(player);