
const gameDisplay = document.querySelector('.gameDisplay')
const buttons = document.querySelectorAll('#game button');

const playResult = document.querySelector('.result');
const statement = document.querySelector('.statement');
const scorePlayer = document.querySelector('.scorePlayer');
const scoreComp = document.querySelector('.scoreComputer');
const defaultScore = document.createElement('p');
const endResult = document.querySelector('#endResult')
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let playerSelection = "";
let computerSelection = "";


function getRandomNum(){
  let randomNum = Math.floor(Math.random() * 3);
  
  switch (randomNum) {
    case 0:
    computerSelection = "ROCK";
      break;
    case 1:
      computerSelection = "PAPER";
      break;
    case 2:
      computerSelection = "SCISSORS";
  }
}
  
function buttonSelect(input){
    switch (input){
      case ("ROCK"):
        playerSelection = input;
        break;
      case ("PAPER"):
        playerSelection = input;
        break;
      case ("SCISSORS"):
        playerSelection = input;
    } 
}

    let score = `TIES: ${tie}`;
    let plyScr = `PLAYER: ${playerScore}`;
    let compScr = `COMPUTER: ${computerScore}`;
    let state = "";
    let result = "";

function playRound(){
    
    if((playerSelection == computerSelection)){
      tie++;
      result = "YOU BOTH TIED";
      state = `YOU BOTH HIT ${computerSelection}`
      score = `TIES: ${tie}`;
      
    }else if((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")){
      
      computerScore++;
       plyScr =`PLAYER: ${playerScore}`;
       compScr = `COMPUTER: ${computerScore}`
       state = `${computerSelection} BEATS ${playerSelection}`;
       result = ("COMPUTER WINS THIS ROUND");
       
    } else if((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
      
        playerScore++;
        plyScr = `PLAYER: ${playerScore}`
        compScr = `COMPUTER: ${computerScore}`;
        state = `${playerSelection} BEATS ${computerSelection}`;
        result = ("PLAYER WINS THIS ROUND");
    }
    
    scorePlayer.textContent = plyScr;
    scoreComp.textContent = compScr;
    statement.textContent = state;
    playResult.textContent = result;
    defaultScore.textContent = score;
}


buttons.forEach((btn) =>{
  
  btn.addEventListener("click", () => {
    buttonSelect(btn.value);
      getRandomNum();
    playRound();
    checkScore();
    });
  }
);


function reset(){
  playerScore = 0;
  computerScore = 0;
  tie = 0;
  playerSelection = "";
  computerSelection = "";
  plyScr = "";
  compScr = ``;
  score = '';
  result = "";
  state = "";
    
    scorePlayer.textContent = plyScr;
    scoreComp.textContent = compScr;
    statement.textContent = state;
    playResult.textContent = result;
    defaultScore.textContent = score;
}
function checkScore(){
    endResult.innerHTML = ''
  if(playerScore == 5 || computerScore == 5 || tie == 5){ 
    if(playerScore == 5){
    endResult.innerHTML = ("YOU WON THE GAME!");
  } else if (computerScore == 5){
    endResult.innerHTML = ("THIS GAME GOES TO THE COMPUTER");
  } else if (tie == 5){
    endResult.innerHTML = ("THE GAME ENDS IN A TIE");
  }
  reset();
  }
}
    
gameDisplay.appendChild(playResult);
gameDisplay.appendChild(statement);
gameDisplay.appendChild(scorePlayer);
gameDisplay.appendChild(scoreComp);
gameDisplay.appendChild(defaultScore);
