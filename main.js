// var game = new Game();
var classicButton = document.querySelector(".classic-game-button");
var difficultButton = document.querySelector(".difficult-game-button");
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var alien = document.querySelector(".alien");
var lizard = document.querySelector(".lizard");

// select the images (svg) - use event.target to grab them
// pull player instantiations into main
// var new testGame = new Game()

// event listeners 👇

classicButton.addEventListener("click", showClassicGame);
difficultButton.addEventListener("click", showDifficultGame);



// Need an event listener on the difficult buttons to fire off the playGame functions, which are already attached to the global variable buttons

// create new instances of game, player class - global variables
// event listener function
// on click, playGame function
// playgame function - where it first runs make user selections, show winner after playing
// display a count


// functions 👇
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function showClassicGame() {
  show(rock);
  show(paper);
  show(scissors);
  hide(classicButton);
  hide(difficultButton);
}

function showDifficultGame() {
  show(rock);
  show(paper);
  show(scissors);
  show(alien);
  show(lizard);
  hide(classicButton);
  hide(difficultButton);
}
