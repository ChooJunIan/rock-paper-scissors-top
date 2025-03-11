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
  return prompt("Enter your choice between: stone, paper, scissors: ")
}

function playRound (compChoice, playerChoice, playerScore, compScore) {
  let playerChoiceLower = playerChoice.toLowerCase();
  let result;
  
  if (playerChoiceLower === 'scissors') {
    if (compChoice === 'scissors') {
      console.log('Its a tie! Play the round again...');
    }
    else if (compChoice === 'paper') {
      console.log('Player wins this round! Scissors beats paper!');
      return result = 'player';
    }
    else {
      console.log('Computer wins this round! Stone beats scissors!')
      return result = 'computer';
    }
  }
  else if (playerChoiceLower === 'paper') {
    if (compChoice === 'scissors') {
      console.log('Computer wins this round! Scissors beats paper!');
      return result = 'computer';
    }
    else if (compChoice === 'paper') {
      console.log('Its a tie! Play the round again...');
    }
    else {
      console.log('Player wins this round! Paper beats stone!');
      return result = 'player';
    }
  }
  else if (playerChoiceLower === 'stone') {
    if (compChoice === 'scissors') {
      console.log('Player wins this round! Stone beats scissors!');
      return result = 'player';
    }
    else if (compChoice === 'paper') {
      console.log('Computer wins this round! Paper beats stone!');
      return result = 'computer';
    }
    else {
      console.log('Its a tie! Play the round again...');
    }
  }
}

function getWinnerResult (playerScore, compScore) {
  if (playerScore === 5) {
    console.log(`Player is the winner of the game!`);
  }
  else {
    console.log(`Computer is the winner of the game!`);
  }
}

function playGame () {
  let playerScore = 0;
  let compScore = 0;
  let gameOver = false;

  while (!gameOver) {
    let compChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
  
    let result = playRound(compChoice, playerChoice, playerScore, compScore);
    
    switch (result) {
      case 'player':
        playerScore += 1;
        break;

      case 'computer':
        compScore += 1;
        break;
      
      default: 
        break;
    }

    console.log(`Player Score: ${playerScore} | Computer Score: ${compScore}`);

    if (playerScore === 5 || compScore === 5) {
      gameOver = true;
      getWinnerResult(playerScore, compScore);
      break;
    }  
  }
}

playGame();

