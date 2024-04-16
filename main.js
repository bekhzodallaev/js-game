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

const winner = (user, comp) => {
  if (user === comp) return "tie";
  else if (
    (user === "rock" && comp === "scissors") ||
    (user === "scissors" && comp === "paper") ||
    (user === "paper" && comp === "rock")
  )
    return "player";
  else return "computer";
};

const getPlayerSelection = (roundNum) => {
  while (true) {
    const selection = prompt(
      `Round ${roundNum}: Time to make your move! Enter 'rock', 'paper', or 'scissors' and let's see who reigns supreme! 😊👊✋✌️`
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

const playRound = (roundNum, playerScore, computerScore) => {
  const playerSelection = getPlayerSelection(roundNum);
  const computerSelection = computerPlay();
  const roundWinner = winner(playerSelection, computerSelection);

  console.log("Computer's selection:", computerSelection);

  if (roundWinner === "player") {
    playerScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }

  let resultMessage;
  if (roundWinner === "player") {
    resultMessage = `Round ${roundNum}: You win! ${playerSelection} beats ${computerSelection}. Player: ${playerScore}, Computer: ${computerScore}.`;
  } else if (roundWinner === "computer") {
    resultMessage = `Round ${roundNum}: You lose! ${computerSelection} beats ${playerSelection}. Player: ${playerScore}, Computer: ${computerScore}.`;
  } else {
    resultMessage = `Round ${roundNum}: It's a tie! Player: ${playerScore}, Computer: ${computerScore}.`;
  }

  alert(resultMessage);

  return roundWinner;
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
    const roundNum = i + 1;
    const roundWinner = playRound(roundNum, playerScore, computerScore);
    if (roundWinner === "player") {
      playerScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }
  }

  console.log("Final scores:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);

  let gameResultMessage;
  if (playerScore > computerScore) {
    gameResultMessage = `Congratulations! You win the game with ${playerScore} out of 5 rounds. Final Score: Player ${playerScore}, Computer ${computerScore}.`;
  } else if (playerScore < computerScore) {
    gameResultMessage = `Oops! You lost the game. The computer wins with ${computerScore} out of 5 rounds. Final Score: Player ${playerScore}, Computer ${computerScore}.`;
  } else {
    gameResultMessage = `It's a tie! Both you and the computer scored ${playerScore} out of 5 rounds. Final Score: Player ${playerScore}, Computer ${computerScore}.`;
  }

  alert(gameResultMessage);
};

game();
