const computerPlay = () => {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
};

const winner = ( user, comp ) => {  
  if (user === comp) return "It's a tie!";  
  else if ((user === 'rock' && comp === 'scissors') || 
          (user === 'scissors' && comp === 'paper') ||  
          (user === 'paper' && comp === 'rock')) return `You win! ${user} beats ${comp}`;   
  else return `You lose! ${comp} beats ${user}`;    
};

const getPlayerSelection = () => {
  while (true) {
      const selection = prompt(
          "Time to make your move! Enter 'rock', 'paper', or 'scissors' and let's see who reigns supreme! 😊👊✋✌️"
      )
          .toLowerCase()
          .trim();
      if (["rock", "paper", "scissors"].includes(selection)) {
          return selection;
      }
      alert(
          "Whoops! Looks like something went askew! Please enter 'rock,' 'paper,' or 'scissors' only. No funny business, okay? Let's keep it fair and square! 😄"
      );
  }
};

const playRound = () => {
  let playerScore   = 0;
  let computerScore = 0;

  const playerSelection   = getPlayerSelection();
  const computerSelection = computerPlay();
  let   resultMessage     = winner(playerSelection, computerSelection);

  console.log("Computer's selection:", computerSelection);
  
  resultMessage = winner( playerSelection, computerSelection)
  if(resultMessage.includes("win")){
      playerScore++
  } else if (resultMessage.includes("lose")){
      computerScore++
  }

  return { resultMessage, playerScore, computerScore };
};

const game = () => {
  const confirmed = confirm(
    "Hello welcome to the (ROCK $ PAPER $ SCISSORS)game. There are 5 rounds in the game. Are you ready to play the game?"
  );
  if (!confirmed) {
    alert("Okay, maybe next time!");
    return;
  }
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const {
      resultMessage,
      playerScore: roundPlayerScore,
      computerScore: roundComputerScore,
    } = playRound();
    console.log(resultMessage);
    playerScore += roundPlayerScore;
    computerScore += roundComputerScore;
    alert(`You finised round ${i + 1}`);
  }

  console.log("Final scores:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);
};

game();
