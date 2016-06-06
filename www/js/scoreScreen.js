Growth.ScoreScreen = function (game) {
  this.game = game;
};

Growth.ScoreScreen.prototype = {

  create: function () {
    var self = this;

    this.game.add.text(170, 100, "You scored: " + Growth.score, Growth.scoreFont);
    this.game.add.text(170, 400, "press space to continue...");

    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(function () {
      self.game.state.start('Game');
    }, this);
  }

};
