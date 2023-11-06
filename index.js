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
let userPoints = 0;
let cpuPoints = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  playRound(rock.textContent);
});
paper.addEventListener("click", () => {
  playRound(paper.textContent);
});
scissors.addEventListener("click", () => {
  playRound(scissors.textContent);
});
function userMove(choice) {
  return choice;
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

function scoreDisplay(winner, cpuChoice, userChoice) {
  let score = document.getElementById("score");
  let cpuScore = document.getElementById("cpu");
  let userScore = document.getElementById("user");
  if (winner == "Draw. No winner") {
  } else if (winner == "User wins!") {
    userPoints++;
    userScore.textContent = "User:" + userPoints;
  } else {
    cpuPoints++;
    cpuScore.textContent = "Computer:" + cpuPoints;
  }
  score.textContent =
    "User picked: " + userChoice + " Cpu picked: " + cpuChoice + " " + winner;

  if (userPoints == 5 || cpuPoints == 5) {
    if (userPoints == 5) {
      score.textContent =
        "USER WINS. Final result: CPU: " + cpuPoints + " User: " + userPoints;
      cpuPoints = 0;
      userPoints = 0;
      cpuScore.textContent = "Computer:" + cpuPoints;
      userScore.textContent = "User:" + userPoints;
    } else {
      score.textContent =
        "CPU WINS. Final result: CPU: " + cpuPoints + " User: " + userPoints;
      cpuPoints = 0;
      userPoints = 0;
      cpuScore.textContent = "Computer:" + cpuPoints;
      userScore.textContent = "User:" + userPoints;
    }
  }
}

function playRound(x) {
  let cpuChoice = computerMove();
  let userChoice = userMove(x);
  let winner = calculateWinner(cpuChoice, userChoice);
  scoreDisplay(winner, cpuChoice, userChoice);
}
