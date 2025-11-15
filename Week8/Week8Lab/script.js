const submit = document.getElementById("submit");
const multiChoice = document.getElementById("multiChoice");
const message = document.getElementById("message");
const userSelectionArea = document.getElementById("userSelectionArea");

submit.addEventListener("click", (e) => {
  userSelectionArea.style.display = "none";

  const userSelection = multiChoice.value;
  const options = ["rock", "paper", "scissors"];

  const ind = Math.floor(Math.random() * 3);
  const computerSelection = options[ind];
  let result;

  if (userSelection === "rock") {
    if (computerSelection === "rock") {
      result = "draw";
    } else if (computerSelection === "paper") {
      result = "lose";
    } else if (computerSelection === "scissors") {
      result = "win";
    }
  } else if (userSelection === "paper") {
    if (computerSelection === "rock") {
      result = "win";
    } else if (computerSelection === "paper") {
      result = "draw";
    } else if (computerSelection === "scissors") {
      result = "lose";
    }
  } else if (userSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "lose";
    } else if (computerSelection === "paper") {
      result = "win";
    } else if (computerSelection === "scissors") {
      result = "draw";
    }
  }

  let msg = `You chose ${userSelection} and the computer chose ${computerSelection}, `;
  if (result === "win") {
    msg += "you win!";
  } else if (result === "draw") {
    msg += "it's a draw.";
  } else if (result === "lose") {
    msg += "you lose.";
  }

  message.textContent = msg;
});
