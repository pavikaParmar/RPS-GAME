// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay")
const computerscoredisplay = document.getElementById("computerscoredisplay")
let playerscore = 0;
let computerscore = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  console.log(playerchoice, computerchoice);
  let result = "";
  if (playerchoice === computerchoice) {
    result = "ITZ A TIE";
  } else {
    switch (playerchoice) {
      case "rock":
        result = (computerchoice === "scissors") ? "you win!" : "You Lose";
        break;
      case "paper":
        result = (computerchoice === "rock") ? "you win!" : "You Lose";
        break;
      case "scissors":
        result = (computerchoice === "paper") ? "you win!" : "You Lose";
        break;
    }
  }
  playerdisplay.textContent = `player:${playerchoice}`;
  computerdisplay.innerHTML = `computer:${computerchoice}`;
  resultdisplay.innerHTML = `result : ${result}`;

  resultdisplay.classList.remove("greentext", "redtext");

  switch (result) {
    case "you win!":
      resultdisplay.classList.add("greentext");
      playerscore++;
      playerscoredisplay.textContent = playerscore;
      break;

    case "you lose!":
      resultdisplay.classList.add("greentext");
      computerscore++;
      computerscoredisplay.textContent = computerscore;
      break;
  }
}
