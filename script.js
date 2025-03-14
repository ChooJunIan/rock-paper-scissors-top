function getComputerChoice () {
  let num = Math.floor(Math.random()* 3);

  switch(num){
    case 0:
      return 'scissors';

    case 1:
      return 'paper';
    
    case 2: 
      return 'stone';
  }
}

function getPlayerChoice () {
  const choice = document.querySelector('#choice');
  return choice.addEventListener('click', (event) => event.target.id)
}

function playRound (compChoice, playerChoice, div, body) {
  let playerChoiceLower = playerChoice.toLowerCase();
  
  if (playerChoiceLower === 'scissors') {
    if (compChoice === 'scissors') {
      div.textContent = 'Its a tie! Play the round again... \r\n';
      body.appendChild(div);
    }
    else if (compChoice === 'paper') {
      div.textContent = 'Player wins this round! Scissors beats paper! \r\n';
      body.appendChild(div);
      return result = 'player';
    }
    else {
      div.textContent = 'Computer wins this round! Stone beats scissors! \r\n';
      body.appendChild(div);
      return result = 'computer';
    }
  }
  else if (playerChoiceLower === 'paper') {
    if (compChoice === 'scissors') {
      div.textContent = 'Computer wins this round! Scissors beats paper! \r\n';
      body.appendChild(div);
      return result = 'computer';
    }
    else if (compChoice === 'paper') {
      div.textContent = 'Its a tie! Play the round again... \r\n';
      body.appendChild(div);
    }
    else {
      div.textContent = 'Player wins this round! Paper beats stone! \r\n';
      body.appendChild(div);
      return result = 'player';
    }
  }
  else if (playerChoiceLower === 'stone') {
    if (compChoice === 'scissors') {
      div.textContent = 'Player wins this round! Stone beats scissors! \r\n';
      body.appendChild(div);
      return result = 'player';
    }
    else if (compChoice === 'paper') {
      div.textContent = 'Computer wins this round! Paper beats stone! \r\n';
      body.appendChild(div);
      return result = 'computer';
    }
    else {
      div.textContent = 'Its a tie! Play the round again... \r\n';
      body.appendChild(div);
    }
  }
}

function displayScore (playerScore, compScore, result, latestResult){
  if (result === 'player') {
    playerScore += 1;
  }
  else if (result === 'computer') {
    compScore += 1;
  }
  else {
    latestResult.textContent += `Player score: ${playerScore} | Computer Score: ${compScore} \r\n`;
    return [playerScore, compScore];
  }
  latestResult.textContent += `Player score: ${playerScore} | Computer Score: ${compScore} \r\n`;
  return [playerScore, compScore];
}

function getWinnerResult (playerScore, compScore, latestResult) {
  if (playerScore === 5) {
    latestResult.textContent += `Player is the winner of the game! \r\n`;
  }
  else {
    console.log(`Computer is the winner of the game!`);
    latestResult.textContent += `Computer is the winner of the game! \r\n`;
  }
}

let playerScore = 0;
let compScore = 0;
const choice = document.querySelector('#choice');
choice.addEventListener('click', (event) => {
  let target = event.target;

  switch(target.id){
    case 'scissors':
      playGame(target.id);
      break;
    case 'paper':
      playGame(target.id);
      break;
    case 'stone':
      playGame(target.id);
      break;
  }
})

function playGame(playerChoice) {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.setAttribute("id", "result");
  div.setAttribute('style', 'white-space: pre;')

  let compChoice = getComputerChoice();
  let result = playRound(compChoice, playerChoice, div, body);

  let divResult = document.querySelectorAll('#result');
  let latestResult = divResult[divResult.length - 1];

  let [newPlayerScore, newCompScore] = displayScore(playerScore, compScore, result, latestResult);
  playerScore = newPlayerScore;
  compScore = newCompScore;

  if (playerScore === 5 || compScore === 5) {
    getWinnerResult(playerScore, compScore, latestResult);
  }  
}