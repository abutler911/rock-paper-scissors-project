const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "bomb") {
    return userInput;
  } else if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Please enter rock, paper, or scissors.";
  }
};

const getComputerChoice = function () {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "User always wins with a bomb!";
  } else if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else if (computerChoice === "rock") {
      return "You won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else if (computerChoice === "paper") {
      return "You won!";
    }
  }
};

const playGame = function () {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(
    `User chooses: ${userChoice} ** Computer chooses: ${computerChoice}.`
  );
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
