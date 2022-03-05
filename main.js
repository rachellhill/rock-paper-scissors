// var game = new Game();
var classicButton = document.querySelector(".classic-game-button");
var difficultButton = document.querySelector(".difficult-game-button");
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var alien = document.querySelector(".alien");
var lizard = document.querySelector(".lizard");
var classicIcons = document.querySelector(".classic-icons");
var difficultIcons = document.querySelector(".difficult-icons");


var humanChoice;
var gameChoice;

// select the images (svg) - use event.target to grab them
// pull player instantiations into main
// var new testGame = new Game()
// event listeners 👇

classicButton.addEventListener("click", showClassicGame);
difficultButton.addEventListener("click", showDifficultGame);
// how do I utlize takeTurn function to grab this click and use it in the class methods?
classicIcons.addEventListener('click', function(event) {
  humanChoice = new Player('human', '👩');
  // gameChoice = new Game(//what parameter goes here)
  if (event.target.className === 'rock') {
    humanChoice.fighter = 'rock';
  } else if (event.target.className === 'paper') {
    humanChoice.fighter = 'paper';
  } else if (event.target.className === 'scissors') {
    humanChoice.fighter = 'scissors';
  }
});

difficultIcons.addEventListener('click', function(event) {
  humanChoice = new Player('human', '👩');
  // gameChoice = new Game(//what parameter goes here)
  if (event.target.className === 'rock') {
    humanChoice.fighter = 'rock';
  } else if (event.target.className === 'paper') {
    humanChoice.fighter = 'paper';
  } else if (event.target.className === 'scissors') {
    humanChoice.fighter = 'scissors';
  } else if (event.target.className === 'alien') {
    humanChoice.fighter = 'alien';
  } else if(event.target.className === 'lizard') {
    humanChoice.fighter = 'lizard';
  }
});
// how do I connect game class methods in this to pair both the human choice to the selectgame function

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
};

function showDifficultGame() {
  show(rock);
  show(paper);
  show(scissors);
  show(alien);
  show(lizard);
  hide(classicButton);
  hide(difficultButton);
};
