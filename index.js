function computerMove() {
  let choice;
  let randomNumber = Math.round(Math.random() * 2);
  if (randomNumber == 0) {
    choice = "ROCK";
  } else if (randomNumber == 1) {
    choice = "PAPER";
  } else {
    choice = "SCISSORS";
  }
  return choice;
}

function userMove() {
  let choice = prompt("Please enter your choice");
  choice = choice.toUpperCase();
  console.log(choice);
  if (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
    alert("Wrong input. You inputed " + choice + ". Try Again.");
    choice = prompt("Please enter your choice");
    choice = choice.toUpperCase();
  } else {
    return choice;
  }
}

function calculateWinner(cpuChoice, userChoice) {
  if (cpuChoice == userChoice) {
    return "Draw. No winner";
  } else if (cpuChoice == "ROCK" && userChoice == "PAPER") {
    console.log("User wins!");
    return "User wins!";
  } else if (cpuChoice == "PAPER" && userChoice == "SCISSORS") {
    console.log("User wins!");
    return "User wins!";
  } else if (cpuChoice == "SCISSORS" && userChoice == "ROCK") {
    console.log("User wins!");
    return "User wins!";
  } else {
    console.log("CPU Wins" + cpuChoice + userChoice);
    return "CPU wins!";
  }
}

function playRound() {
  let cpuChoice = computerMove();
  let userChoice = userMove();
  let winner = calculateWinner(cpuChoice, userChoice);
  let score = document.getElementById("score");
  let cpuScore = document.getElementById("cpu");
  let userScore = document.getElementById("user");
  if (winner == "Draw. No winner") {
    return;
  } else if (winner == "User wins!") {
    userPoints++;
    userScore.textContent = "User:" + userPoints;
  } else {
    cpuPoints++;
    cpuScore.textContent = "Computer:" + cpuPoints;
  }
  score.textContent = winner;
}

let userPoints = 0;
let cpuPoints = 0;
