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


var gameChoice = new Game();
var humanChoice = gameChoice.player1;
var computerChoice = gameChoice.player2;
// var humanChoice;
// var humanChoice = new Player('Human', '👩');
// global array
// gameChoice.player1 - using above as my instantiation to access players through here

// select the images (svg) - use event.target to grab them
// pull player instantiations into main
// var new testGame = new Game()
// event listeners 👇

// if classicButton is clicked, I need to show the classic game but also save the gameType as classicButton
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


// how do I utlize takeTurn function to grab this click and use it in the class methods?
classicIcons.addEventListener('click', function(event) {
  if (event.target.className === 'rock') {
    humanChoice.fighter = 'rock';
    humanChoice.fighterImg = `<img class="rock" alt="rock icon" src="./assets/happy-rocks.png">`;
  } else if (event.target.className === 'paper') {
    humanChoice.fighter = 'paper';
    humanChoice.fighterImg = `<img class="paper" alt="paper icon" src="./assets/happy-paper.png">`;
  } else if (event.target.className === 'scissors') {
    humanChoice.fighter = 'scissors';
    humanChoice.fighterImg = `<img class="scissors" alt="scissors icon" src="./assets/lines-scissors.png">`;
  }
  gameChoice.playSelectedGame();
  showGameResults()
  // set time out in here
});
// I know what gameType, now we need user to choose their icon within the gameType, take this input and pass it to the game Class
  // potential issue: when a new game is reinstantiated, wins are set back to 0 after they switch to another game.
  // need to find a way to save their wins
  // new game instantiate on load, instead of in classic buttons

// event listener function
  // on click, playGame function
  // playgame function - where it first runs make user selections, show winner after playing
  // display a count
difficultIcons.addEventListener('click', function(event) {
  humanChoice.fighter = event.target.className;
  humanChoice.fighterImg = gameChoice.player1.images[humanChoice.fighter];
  var winner = gameChoice.playSelectedGame();
  showGameResults(humanChoice, computerChoice, winner)
  // set time out in here
});

// now that I know the winner in above function, I need to be able to show the human's choice and the computer's choice and the return statement in checkwinner functions along with icons
  // I should create a function below that updates the DOM to hide all of the icons, except for the computer and human's choices
  // I should also update the DOM by adding the strings of who won
  // then call it in the two functions above ?


// functions 👇
function showGameResults(humanChoice, computerChoice, winner) {
  // need to show winner string here as well
  // array of objects with name and src as properties
  // inject the ones that need to show
  gameResults.innerHTML = '';
  gameResults.innerHTML += humanChoice.fighterImg;
  gameResults.innerHTML += computerChoice.fighterImg;  chooseFighter.innerHTML = winner;
  // set timeout function here
}

// make a reset function here
  // after time out, find out what type of game it is and show the appropriate game
  // gameresults.innerHTML = '';
  // chooseFighter.innerHTML = chooseFighter
  // 

// function showGameResults() {
//   for (var i = 0; i < icons.length -1; i++) {
//     hide(icons[i]);
//     // if a fighter is selected, unhide it
//     // if (icons[i] === humanChoice.fighter) {
//     //
//     }
//     show(document.getElementById(`${humanChoice.fighter}`));
//     show(document.getElementById(`${computerChoice.fighter}`));
//   }
  // in the case of a draw, you want to duplicate that icon on the DOM

//make buttons by iterating over array,
// when clicked, fighters.innterHTML = empty string
  // makes a new
// hide anything that is not matching the users choice
// loop array -1
// build a conditional that checks to see if theyre equal and then

// hid all of the icons on click in showGameResults
// show function for human selected choice and one for computer selected choice
  // tried hiding all of the elements but since the parent element only had the hidden, I couldnt unhide that in the specific fighter's class or ID because it wasnt there to begin with

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

// function hideDifficultGame() {
//
// }
// function hideUnselectedFighters() {
//   hide()
// }
