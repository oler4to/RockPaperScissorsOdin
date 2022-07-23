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
}
computerPlay()


let playerScore = 0;
let computerScore = 0;


let value;
function playRound(input){
 value = (prompt("N0.?")).toLowerCase()
  if((input == "Scissors" && computerSelection == "Paper") || (input == "Paper" && computerSelection == "Rock") || (input == "Rock" && computerSelection == "Scissors")){
console.log(`${input} beats ${computerSelection}
You win`)
return playerScore++

} else if((input == "Rock" && computerSelection == "Paper") || (input == "Scissors" && computerSelection == "Rock") || (input == "Paper" && computerSelection == "Scissors")){
  console.log(`${computerSelection} beats ${input}
  You lose.`)
} else if (input == computerSelection ){
  console.log("You guys tied")
} else{
  console.log("Please enter another value")
}
  }
  
  for(let i = 0; i < 5; i++){
playRound(value)
}

  function gameResult(){
    if(playerScore >= 3){
      console.log("YOU WON THE GAME")
    }
  }