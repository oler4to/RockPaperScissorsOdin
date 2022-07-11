
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

function playRound() {
  let playerSelection = prompt("Pick your fighter");
  
  if(playerSelection == computerSelection){
    console.log("THAT'S A TIE");
    
  } else if((playerSelection == "Rock" && computerSelection == Paper) 
  || (playerSelection == "Paper" && computerSelection == "Scissors" ) 
  || (playerSelection == "Scissors" && computerSelection == "Rock") ){
    console.log("THAT'S ONE FOR THE COMPUTER");
    
  } else{
    console.log("WELL DONE!")
  }
}
playRound();

