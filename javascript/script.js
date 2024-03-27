let choices = document.querySelectorAll(".choice");
let resultTxt = document.querySelector(".result p");
let resultScoreUser = document.querySelector(".user-score>p");
let resultScoreComp = document.querySelector(".comp-score>p");
let userCount = 0;
let compCount = 0;

const draw = () => {
  resultTxt.innerText = "It's a Draw";
  resultTxt.style.color = "black";
};

const result = (userWin) => {
  if (userWin == true) {
    resultTxt.style.color = "blue";
    resultTxt.innerText = "Congratulations! You won";
    userCount++;
    resultScoreUser.innerText = `${userCount}`;
  } else {
    resultTxt.style.color = "red";
    resultTxt.innerText = "Oops! You Loose";
    compCount++;
    resultScoreComp.innerText = `${compCount}`;
  }
};

const compChoiceGenerator = () => {
  const options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

const playGame = (userChoice) => {
  const compChoice = compChoiceGenerator();
  console.log("Computer's choice is", compChoice);
  console.log("User's choice is", userChoice);
  let userWin = true;
  if (compChoice == userChoice) {
    draw();
  } else {
    if (compChoice == "rock") {
      userWin = userChoice == "paper" ? true : false;
    } else if (compChoice == "paper") {
      userWin = userChoice == "scissors" ? true : false;
    } else {
      userWin = userChoice == "rock" ? true : false;
    }
    result(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
