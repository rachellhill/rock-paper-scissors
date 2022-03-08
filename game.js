class Game {
  constructor() {
    this.player1 = new Player('Human', '👩');
    this.player2 = new Player('Computer', '💻');
    this.winner = null;
    this.gameType = '';
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
  };

  playSelectedGame() {
    if (this.gameType === 'classic') {
      this.playClassicGame();
      return this.checkWinnerClassic();
    } else if (this.gameType === 'difficult') {
      this.playDifficultGame();
      return this.checkWinnerDifficult();
    };
  };

  playClassicGame() {
    this.player1.takeTurn(this.player1.classicChoices);
    this.player2.getComputerChoice(this.player2.classicChoices);
  };

  playDifficultGame() {
    this.player1.takeTurn(this.player1.difficultChoices);
    this.player2.getComputerChoice(this.player2.difficultChoices);
  };

  checkWinnerClassic() {
    if (this.player1.fighter === this.player2.fighter) {
      return "It's a draw!";
    } else if (this.winsConditionsClassic.includes(`${this.player1.fighter} > ${this.player2.fighter}`)) {
      this.winner = this.player1.name;
      this.player1.wins++;
      return `${this.player1.token} ${this.player1.name} won! ${this.player1.token}`;
    } else {
      this.player2.wins++;
      return `${this.player2.token} ${this.player2.name} won! ${this.player2.token}`;
    };
  };

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
    };
  };

  resetGame() {
    if (this.gameType === 'classic') {
      showClassicGame();
    } else if (this.gameType === 'difficult') {
      showDifficultGame();
    };
  };
};
