Growth.TransitionScreen = function (game) {
  this.game = game;
};

Growth.TransitionScreen.prototype = {

  create: function () {
    this.game.stage.backgroundColor = "#424242";

    this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY - 65, "You scored: " + Growth.score, Growth.scoreFont);

    var graphics = this.game.add.graphics(0, 0);
    // draw a rectangle
    graphics.beginFill(0x424242);
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.drawRoundedRect(this.game.world.centerX - 100, this.game.world.centerY - 20, 200, 40, 6);

    var text = this.game.add.text(this.game.world.centerX - 50, this.game.world.centerY - 15, "继续游戏");

    text.inputEnabled = true;
    text.fill = "#fff";
    text.buttonMode = true;
    text.events.onInputDown.add(this.startGame, this);
  },
  startGame: function () {
    this.game.state.start('Game')
  }

};
