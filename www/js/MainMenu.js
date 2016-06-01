Growth.MainMenu = function (game) {
  this.music = null;
};

Growth.MainMenu.prototype = {
  create: function () {
    var text = this.game.add.text(20, 20, "Start");
    var hitRect = new Phaser.Rectangle(15, 10, 300, 50);

    text.hitArea = hitRect;
    text.inputEnabled = true;
    text.buttonMode = true;
    text.events.onInputDown.add(this.startGame, this);
  },

  update: function () {

  },

  startGame: function () {
    this.state.start('Game');
  }

};
