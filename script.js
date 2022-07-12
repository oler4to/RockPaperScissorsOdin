
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
  
function playRound() {
  let playerSelection = prompt("Pick your fighter");
  
  if(playerSelection == computerSelection){
    alert("THAT'S A TIE");
    
  } else if((playerSelection == "Rock" && computerSelection == "Paper") 
  || (playerSelection == "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection == "Scissors" && computerSelection == "Rock") ){
    alert(`${computerSelection} beats ${playerSelection}.
    THE COMPUTER WINS`);
   return computerScore++;
    
  } else if ((playerSelection !== "Rock" && computerSelection == "Paper") 
  || (playerSelection !== "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection !== "Scissors" && computerSelection == "Rock") ) {
    alert(`${playerSelection} beats ${computerSelection}.
    YOU WIN`);
    return playerScore++;
  }
}


function game(){
  for (let i = 0; i < 5; i++) {
  computerPlay();
  playRound();
  }
}
game();

function results(){
  if(playerScore >= 3){
  alert("YOUR ARE THE CHAMPION OF THIS GAME");
  } else if (computerScore >= 3){
    alert("UNFORTUNATELY, YOU FAILED");
  } else {
    alert("NO ONE WON. REPLAY");
  }
}

results()