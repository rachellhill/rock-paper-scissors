// what makes sense for the class to know about itself
// class should know what token its holding onto, which one represents the player

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.fighter = null;
    this.classicChoices = ['rock', 'paper', 'scissors']
    this.difficultChoices = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
    this.wins = 0;
    this.images = {
      rock: `<img class="rock" alt="rock icon" src="./assets/happy-rocks.png">`,
      paper: `<img class="paper" alt="paper icon" src="./assets/happy-paper.png">`,
      scissors: `<img class="scissors" alt="scissors icon" src="./assets/lines-scissors.png">`,
      alien: `<img class="alien" id="alien" alt="alien icon" src="./assets/flat-alien.png">`,
      lizard: `<img class="lizard" id="rock" alt="lizard icon" src="./assets/flat-lizard.png">`
    }
  }
  getComputerChoice(array) {
    this.fighter = array[Math.floor(Math.random() * array.length)];
    this.fighterImg = this.images[this.fighter];
    return this.fighter;
  }

  takeTurn() {
    return this.fighter;
  }
}
