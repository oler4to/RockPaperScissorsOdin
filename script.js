 
let gameDisplay = document.querySelector('.gameDisplay')


  let computerSelection = ['Rock'
  , 'Paper'
  ,'Scissors'];
  
function computerPlay() {
  let randomGen = Math.floor(Math.random() * computerSelection.length);
  
  if(randomGen == 0){
    computerSelection = "Rock";
  } else if(randomGen == 1){
    computerSelection = "Paper";
  } else if(randomGen == 2){
    computerSelection = "Scissors";
  }
}


  let playerScore = 0;
  let computerScore = 0;
  
function playRound(playerSelection) {
  
  if(playerSelection == computerSelection){
    alert("THAT'S A TIE");
    
  } else if((playerSelection == "Rock" && computerSelection == "Paper") 
  || (playerSelection == "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection == "Scissors" && computerSelection == "Rock") ){
    alert(`${computerSelection} beats ${playerSelection}.
    THE COMPUTER WINS`);
   return computerScore++;
    
  } else if (playerSelection == null){
    alert("Please Enter A Value");
    
  } else if ((playerSelection !== "Rock" && computerSelection == "Paper") 
  || (playerSelection !== "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection !== "Scissors" && computerSelection == "Rock" ) ) {
    alert(`${playerSelection} beats ${computerSelection}.
    YOU WIN`);
    return playerScore++;
}
}


function results(){
  if(playerScore >= 3){
  alert("YOUR ARE THE CHAMPION OF THIS GAME");
  } else if (computerScore >= 3){
    alert("UNFORTUNATELY, YOU FAILED");
  } else {
    alert("NO ONE WON. REPLAY");
  }
}

results();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  
  button.addEventListener('click', () => playRound(button.value));
});