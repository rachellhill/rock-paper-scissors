//two player instances ✅
// A way to keep track of the data for the game board
  // what's the data?
    // player1's choice, player 2's choice, winner ✅
// A way to keep track of the selected game type
  // somehow will need to differentiate classic vs difficult ✅
// A way to check the Game’s board data for win conditions
  // create a new property of Game (this.winConditions) for both classic and difficult
  // can use an array of strings comparing each ✅
// A way to detect when a game is a draw (no one has won) ✅
// A way to reset the Game’s board to begin a new game
  // time reset

class Game {
  constructor(gameType) {
    this.player1 = new Player('Human', '👩');
    this.player2 = new Player('Computer', '💻');
    this.winner = null;
    this.gameType = gameType;
    this.winsConditionsClassic = [
      'rock > scissors',
      'scissors > paper',
      'paper > rock'
    ];
    this.winsConditionsDifficult = [
      'rock > scissors',
      'scissors > paper',
      'paper > rock',
      'rock > lizard',
      'lizard > alien',
      'alien > rock',
      'paper > alien',
      'scissors > alien',
    ];
  }

  selectGame() {
    // if this.gameType is equal to the global variable of classicChoice, invoke playClassicGame function
    if (this.gameType === classicButton) {
      this.playClassicGame();
      return this.checkWinnerClassic()
    } else if (this.gameType === difficultButton) {
      this.playDifficultGame();
      return this.checkWinnerDifficult();
    }
  }
  playClassicGame() {
    this.player1.takeTurn(this.player1.classicChoices);
    // console.log(this.player1.fighter);
    this.player2.getComputerChoice(this.player2.classicChoices);
    // console.log(this.player2.fighter);
  }

  playDifficultGame() {
    this.player1.takeTurn(this.player1.difficultChoices);
    // console.log(this.player1.fighter);
    this.player2.getComputerChoice(this.player2.difficultChoices);
    // console.log(this.player2.fighter);
  }
  // if user clicks on one of the picture icons, that data is stored here and a new instance of this class is in the playGame function to check the users choice against the computer's randomly generated choice
  checkWinnerClassic() {
    if (this.player1.fighter === this.player2.fighter) {
      return "It's a draw!";
    } else if (this.winsConditionsClassic.includes(`${this.player1.fighter} > ${this.player2.fighter}`)) {
      this.winner = this.player1.name;
      this.player1.wins++;
      return `${this.player1.name} won!`;
    } else {
      this.player2.wins++;
      return `${this.player2.name} won!`;
    }
  }

  checkWinnerDifficult() {
    if (this.player1.fighter === this.player2.fighter) {
      return "It's a draw!";
    } else if (this.winsConditionsDifficult.includes(`${this.player1.fighter} > ${this.player2.fighter}`)) {
      this.winner = this.player1.name;
      this.player1.wins++;
      return `${this.player1.name} won!`;
    } else {
      this.player2.wins++;
      return `${this.player2.name} won!`;
    }
  }
}
