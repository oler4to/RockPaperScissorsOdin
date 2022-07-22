const game = document.querySelector('#game');
const buttons = document.querySelector('button');

const playResult = document.querySelector('.result');
const score = document.querySelector('.score');
const endResult = document.querySelector('.endResult');

const computerSelection = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  let random = (Math.floor(Math.random() * computerSelection.length));
  
  console.log(random);
}

computerPlay()