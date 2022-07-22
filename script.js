const game = document.querySelector('#game');
const buttons = document.querySelector('button');

const playResult = document.querySelector('.result');
const score = document.querySelector('.score');
const endResult = document.querySelector('.endResult');

let computerSelection = ["Rock", "Paper", "Scissors"];

 function playGame(){
function computerPlay(){
  let random = (Math.floor(Math.random() * computerSelection.length));
  
  if (random == 0){
    computerSelection = "Rock";
  } else if (random == 1){
    computerSelection = "Paper";
  } else if(random == 2){
    computerSelection = "Scissors";
  }
}

computerPlay()

let playerScore = 0;
let computerScore = 0;
let playerSelection = (prompt("Your Fighter")).toLowerCase();

function playRound(input){
  
  if((input == "rock" && computerSelection == "Scissors") || (input == "paper" && computerSelection == "Rock") || (input == "scissors" && computerSelection == "Paper")){
    console.log("Yes! KEEP GOING!");
    return playerScore++;
    
  }else if ((input == "scissors" && computerSelection == "Rock")||(input == "rock" && computerSelection == "Paper")||(input == "paper" && computerSelection == "Scissors")){
    console.log("Oh Shucks! TRY AGAIN!");
    return computerScore++;
 } else if(input == computerSelection){
    console.log("You guys are tied");
  }
}
playRound(playerSelection)
}
for (i = 0; i <= 5; i++){
  playGame()
}