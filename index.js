const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoices) {

  playerDisplay.innerHTML = "PLAYER : ";
  computerDisplay.innerHTML = "COMPUTER : ";
  resultDisplay.innerHTML = "";
  
  const computerChoices = choices[Math.floor(Math.random()*3)];
  let result = "";

  if (playerChoices === computerChoices) {
    result = "IT'S A TIE"
    resultDisplay.append(result);
  } 
  else {
    switch (playerChoices) {
      case "rock":
        result = (computerChoices === "scissors") ? "YOU WIIN GRATTZ" : "YOU LOSEE BWAHAHAH";
        break;
      case "paper":
        result = (computerChoices === "rock") ? "YOU WIIN GRATTZ" : "YOU LOSEE BWAHAHAH";
        break;
      case "scissors":
        result = (computerChoices === "paper") ? "YOU WIIN GRATTZ" : "YOU LOSEE BWAHAHAH";
        break;
    }
  }

  //we can use this
  playerDisplay.append(playerChoices);
  computerDisplay.append(computerChoices);
  // resultDisplay.append(result);

  //or this(more common tho)
  // playerDisplay.textContent = `PLAYER : ${playerChoices}`
  // computerDisplay.textContent = `COMPUTER : ${computerChoices}`
  resultDisplay.textContent = `${result}`

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIIN GRATTZ":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSEE BWAHAHAH":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}