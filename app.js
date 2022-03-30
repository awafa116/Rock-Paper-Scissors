/************************************************************************************/
//                                G A M E   L O G I C
/************************************************************************************/
function checkWin(playerChoice) {
  const resultDisplay = document.querySelector(".result h1");
  const scoreDisplay = document.querySelector(".score");

  const computerDisplay = document.querySelector(".computer .choice");
  const computerimg = document.querySelector(".computer .choice img");
  const ranNum = Math.floor(Math.random() * 3);
  const choicesArr = ["computer-rock", "computer-paper", "computer-scissors"];
  const computerChoice = choicesArr[ranNum];
  let isWin = "";
  let score = 0;
  console.log(computerChoice);

  if (computerChoice == "computer-rock") {
    computerDisplay.classList.add("rock");
    computerimg.setAttribute("src", "./images/icon-rock.svg");
    if (playerChoice == "player-paper") {
      isWin = "win";
    } else if (playerChoice == "player-scissors") {
      isWin = "lose";
    } else {
      isWin = "tie";
    }
  } else if (computerChoice == "computer-paper") {
    computerDisplay.classList.add("paper");
    computerimg.setAttribute("src", "./images/icon-paper.svg");
    if (playerChoice == "player-paper") {
      isWin = "tie";
    } else if (playerChoice == "player-scissors") {
      isWin = "win";
    } else {
      isWin = "lose";
    }
  } else {
    computerDisplay.classList.add("scissors");
    computerimg.setAttribute("src", "./images/icon-scissors.svg");
    if (playerChoice == "player-paper") {
      isWin = "lose";
    } else if (playerChoice == "player-scissors") {
      isWin = "tie";
    } else {
      isWin = "win";
    }
  }
  if (isWin == "win") {
    resultDisplay.innerText = "YOU WiN!";
    score++;
  } else if (isWin == "lose") {
    resultDisplay.innerText = "YOU LOSE!";
    score--;
  } else {
    resultDisplay.innerText = "IT'S TIE!";
  }
  console.log(score);
}

/************************************************************************************/
//                                A N I M A T I O N
/************************************************************************************/

//------------------------------
// C H O O S E   S E C T I O N
//------------------------------
const choices = document.querySelectorAll(".choose-sec .choice");
const chooseSec = document.querySelector(".choose-sec");
const resultPlayer = document.querySelector(".player .choice");
const resultPlayerImg = document.querySelector(".player .choice img");
let playerPicked = "";
let chooseIsDone = false;

// taking player choice ...
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playerPicked = choice.id;
  });
});

chooseSec.addEventListener("click", () => {
  //
  // changing player choice in result section
  if (playerPicked == "player-rock") {
    resultPlayer.classList.add("rock");
    resultPlayerImg.setAttribute("src", "./images/icon-rock.svg");
  } else if (playerPicked == "player-paper") {
    resultPlayer.classList.add("paper");
    resultPlayerImg.setAttribute("src", "./images/icon-paper.svg");
  } else {
    resultPlayer.classList.add("scissors");
    resultPlayerImg.setAttribute("src", "./images/icon-scissors.svg");
  }

  // Animating chose section out
  const choiceRock = document.querySelector(".choose-sec .rock");
  const choicePaper = document.querySelector(".choose-sec .paper");
  const choiceScissors = document.querySelector(".choose-sec .scissors");
  const tlChoose = gsap.timeline({
    defaults: { duration: ".5", ease: "Power2.easeOut" },
  });
  if (playerPicked == "player-rock") {
    tlChoose.to(choiceRock, { scale: 1.2 });
  } else if (playerPicked == "player-paper") {
    tlChoose.to(choicePaper, { scale: 1.2 });
  } else {
    tlChoose.to(choiceScissors, { scale: 1.2 });
  }
  tlChoose.to(chooseSec, { y: 20, opacity: 0, delay: 0.2 });
  tlChoose.set(chooseSec, { display: "none" });
  startResult(playerPicked);
  checkWin(playerPicked);
});

//------------------------------
// R E S U L T   S E C T I O N
//------------------------------
function startResult() {
  checkWin(playerPicked);
  const resultSec = document.querySelector(".result-sec");
  const computerDisplay = document.querySelector(".computer .choice");
  const result = document.querySelector(".result");
  const playAgain = document.querySelector(".play-again");

  const tlResult = gsap.timeline({
    defaults: { duration: ".5", ease: "Power2.easeOut" },
  });
  tlResult.set(resultSec, { display: "grid", y: 10, delay: 1.5, opacity: 0 });
  // tlResult.set(result, { scale: 0 }, "<0");
  tlResult.set(playAgain, { display: "none" }, "<0");
  // gsap.set(computerDisplay, { opacity: 0 });
  tlResult.to(resultSec, { y: 0, opacity: 1 });
  tlResult.to(resultSec, { y: 0, opacity: 1 });
  // tlResult.to(result, { scale: 1 });
}

//--------------------------
// R U L E S   W I N D O W
//--------------------------
const rulesClose = document.querySelector(".close-rules-btn");
const rulesOpen = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules-container");
const tlRules = gsap.timeline({
  defaults: { duration: ".5", ease: "Power2.easeOut" },
});
rulesOpen.addEventListener("click", () => {
  tlRules.set(rules, { display: "flex" });
  tlRules.fromTo(rules, { opacity: 0 }, { opacity: 1 });
});
rulesClose.addEventListener("click", () => {
  tlRules.fromTo(rules, { opacity: 1 }, { opacity: 0, duration: 0.3 });
  tlRules.set(rules, { display: "none" });
});
