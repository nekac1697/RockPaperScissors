function computerMove() {
  let choice;
  let randomNumber = Math.round(Math.random() * 2);
  if (randomNumber == 0) {
    choice = "Rock";
  } else if (randomNumber == 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}
console.log(computerMove());
