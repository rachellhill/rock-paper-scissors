// var game = new Game();
var classicButton = document.querySelector(".classic-game-button");
var difficultButton = document.querySelector(".difficult-game-button");
var classicGameType = document.querySelector("#classic");
var difficultGameType = document.querySelector("#difficult");
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var alien = document.querySelector(".alien");
var lizard = document.querySelector(".lizard");
var classicIcons = document.querySelector(".classic-icons");
var difficultIcons = document.querySelector(".difficult-icons");
var chooseGame = document.querySelector(".choose-game");
var chooseFighter = document.querySelector(".choose-fighter");
var changeGameButton = document.querySelector(".change-game-button");
var icons = [rock, paper, scissors, alien, lizard];
var gameResults = document.querySelector(".game-results");
var humanWins = document.querySelector("#player1-wins");
var computerWins = document.querySelector("#player2-wins");
var winner;

var gameChoice = new Game();
var humanChoice = gameChoice.player1;
var computerChoice = gameChoice.player2;

// event listeners 👇
classicButton.addEventListener("click", function(event) {
  gameChoice.gameType = 'classic';
  showClassicGame();
});

difficultButton.addEventListener("click", function(event) {
  gameChoice.gameType = 'difficult';
  showDifficultGame();
});
// refactor: combine these two eventListeners to use event delegation
  // parent element of on event listener, use event.target.id to grab that gameType
// game.gameType = classicbutton.id or event.target.id

classicIcons.addEventListener('click', function(event) {
  humanChoice.fighter = event.target.className;
  humanChoice.fighterImg = gameChoice.player1.images[humanChoice.fighter];
  var winner = gameChoice.playSelectedGame();
  showGameResults(humanChoice, computerChoice, winner);
});

difficultIcons.addEventListener('click', function(event) {
  humanChoice.fighter = event.target.className;
  humanChoice.fighterImg = gameChoice.player1.images[humanChoice.fighter];
  var winner = gameChoice.playSelectedGame();
  showGameResults(humanChoice, computerChoice, winner)
});

changeGameButton.addEventListener('click', changeGame);

// functions 👇
function showGameResults(humanChoice, computerChoice, winner) {
  gameResults.innerHTML = '';
  gameResults.innerHTML += humanChoice.fighterImg;
  gameResults.innerHTML += computerChoice.fighterImg;
  chooseFighter.innerHTML = winner;
  humanWins.innerHTML = `Wins: ${humanChoice.wins}`;
  computerWins.innerHTML = `Wins: ${computerChoice.wins}`;
  show(gameResults);
  hide(difficultIcons);
  hide(classicIcons);
  setTimeout(playAgain, 2000);
}

function playAgain() {
  gameChoice.resetGame();
  hide(gameResults);
  chooseFighter.innerHTML = "Choose Your Fighter!";
}

function changeGame() {
  show(classicButton);
  show(difficultButton);
  show(chooseGame);
  hide(classicIcons);
  hide(difficultIcons);
  hide(chooseFighter);
  hide(changeGameButton);
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function showClassicGame() {
  show(classicIcons);
  show(chooseFighter);
  show(changeGameButton);
  hide(chooseGame);
  hide(classicButton);
  hide(difficultButton);
};

function showDifficultGame() {
  show(difficultIcons);
  show(chooseFighter);
  show(changeGameButton);
  hide(chooseGame);
  hide(classicButton);
  hide(difficultButton);
};
