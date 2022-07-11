
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

computerPlay();

  let playerScore = 0;
  let computerScore = 0;
  
function playRound() {
  let playerSelection = prompt("Pick your fighter");
  
  if(playerSelection == computerSelection){
    console.log("THAT'S A TIE");
    
  } else if((playerSelection == "Rock" && computerSelection == "Paper") 
  || (playerSelection == "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection == "Scissors" && computerSelection == "Rock") ){
    console.log("THAT'S ONE FOR THE COMPUTER");
   return computerScore++;
    
  } else if ((playerSelection !== "Rock" && computerSelection == "Paper") 
  || (playerSelection !== "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection !== "Scissors" && computerSelection == "Rock") ) {
    console.log("WELL DONE!");
    return playerScore++;
  }
}
playRound();

function game(){
  for (let i = 0; i < 5; i++) {
    computerPlay()
  playRound();
  }
}
game();

function results(){
  if(playerScore >= 3){
  alert("YOU WON")
  } else if (computerScore >= 3){
    alert("YOU LOST")
  } else {
    alert("NO ONE WON. REPLAY")
  }
}

results()