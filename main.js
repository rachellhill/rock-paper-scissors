// Global Variables 👇
var classicButton = document.querySelector(".classic-game-button");
var difficultButton = document.querySelector(".difficult-game-button");
var classicGameType = document.querySelector("#classic");
var difficultGameType = document.querySelector("#difficult");
var classicIcons = document.querySelector(".classic-icons");
var difficultIcons = document.querySelector(".difficult-icons");
var chooseGame = document.querySelector(".choose-game");
var chooseFighter = document.querySelector(".choose-fighter");
var changeGameButton = document.querySelector(".change-game-button");
var gameResults = document.querySelector(".game-results");
var humanWins = document.querySelector("#player1-wins");
var computerWins = document.querySelector("#player2-wins");
var winner;
var emoji = document.querySelector(".emoji");
var tokens = ['&#128105;','&#129492;&#8205;&#9792;', '&#129489;', '&#129492;&#8205;&#9794;', '&#128104;', '&#129489;&#8205;&#129457;'];
var changeTokenButton = document.querySelector(".change-token");
var changeTokenContainer = document.querySelector(".change-token-container");
var gameChoice = new Game();
var humanChoice = gameChoice.player1;
var computerChoice = gameChoice.player2;

// Event Listeners 👇
classicButton.addEventListener("click", function(event) {
  gameChoice.gameType = 'classic';
  showClassicGame();
});
difficultButton.addEventListener("click", function(event) {
  gameChoice.gameType = 'difficult';
  showDifficultGame();
});
classicIcons.addEventListener('click', playGame);
difficultIcons.addEventListener('click', playGame);
changeGameButton.addEventListener('click', changeGame);
changeTokenButton.addEventListener('click', changeToken);
// Functions 👇
function showGameResults(humanChoice, computerChoice, winner) {
  gameResults.innerHTML = '';
  gameResults.innerHTML += humanChoice.token + humanChoice.fighterImg;
  gameResults.innerHTML += computerChoice.fighterImg + computerChoice.token;
  chooseFighter.innerHTML = winner;
  humanWins.innerHTML = `Wins: ${humanChoice.wins}`;
  computerWins.innerHTML = `Wins: ${computerChoice.wins}`;
  show(gameResults);
  hide(difficultIcons);
  hide(classicIcons);
  hide(changeGameButton);
  setTimeout(playAgain, 2000);
};

function playGame() {
  humanChoice.fighter = event.target.className;
  humanChoice.fighterImg = gameChoice.player1.images[humanChoice.fighter];
  var winner = gameChoice.playSelectedGame();
  showGameResults(humanChoice, computerChoice, winner);
}

function playAgain() {
  gameChoice.resetGame();
  hide(gameResults);
  chooseFighter.innerHTML = "Choose Your Fighter!";
};

function changeToken() {
  var tokenIndex = changeTokenButton.dataset.tokenIndex;
  var button = '';
  tokenIndex++;
  if (tokenIndex === tokens.length) {
    tokenIndex = 0;
  };
  emoji.innerHTML = tokens[tokenIndex];
  button = `<button class="change-token" data-token-index="${tokenIndex}">Change Token</button>`;
  changeTokenContainer.innerHTML = button;
  changeTokenButton = document.querySelector(".change-token");
  changeTokenButton.addEventListener('click', changeToken);
  humanChoice.token = tokens[tokenIndex];
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function changeGame() {
  show(classicButton);
  show(difficultButton);
  show(chooseGame);
  hide(classicIcons);
  hide(difficultIcons);
  hide(chooseFighter);
  hide(changeGameButton);
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
