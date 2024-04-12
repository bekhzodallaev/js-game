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

const playRound = () => {
  let playerSelection;
  let resultMessage;
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    playerSelection = prompt(
      "Enter rock, paper, or scissors 😊😊"
    ).toLowerCase();
    console.log("Player's selection:", playerSelection);
    if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      break;
    }
    alert("Invalid input ❌! Please enter rock, paper, or scissors.✌️✌️");
  }

  const computerSelection = computerPlay();
  console.log("Computer's selection:", computerSelection);

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultMessage = "You lose! Paper beats Rock 😢";
      computerScore++;
    } else if (computerSelection === "scissors") {
      resultMessage = "You win! Rock beats Scissors 😍";
      playerScore++;
    } else {
      resultMessage = "It's a tie! 🤝";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      resultMessage = "You win! Paper beats Rock 😍";
      playerScore++;
    } else if (computerSelection === "scissors") {
      resultMessage = "You lose! Scissors beats Paper 😢";
      computerScore++;
    } else {
      resultMessage = "It's a tie! 🤝";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      resultMessage = "You lose! Rock beats Scissors 😢";
      computerScore++;
    } else if (computerSelection === "paper") {
      resultMessage = "You win! Scissors beats Paper 😍";
      playerScore++;
    } else {
      resultMessage = "It's a tie! 🤝";
    }
  }

  return { resultMessage, playerScore, computerScore };
};

const game = () => {
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
  }

  console.log("Final scores:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);
};

game();
