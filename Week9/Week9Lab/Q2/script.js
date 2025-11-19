for (let i = 0; i < 3; ++i) {
  const userSelection = prompt(
    "Choose rock, paper or scissors: " + "(Attempt: " + (i + 1) + ")"
  ).toLowerCase();
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
  } else {
    alert("Invalid entry");
    continue;
  }

  let msg = `You chose ${userSelection} and the computer chose ${computerSelection}, `;
  if (result === "win") {
    msg += "you win!";
  } else if (result === "draw") {
    msg += "it's a draw.";
  } else if (result === "lose") {
    msg += "you lose.";
  }

  alert(msg);

  if (result === "win") {
    break;
  }
}
