Growth.MainMenu = function (game) {
  this.music = null;
};

Growth.MainMenu.prototype = {
  create: function () {
    var graphics = this.game.add.graphics(0, 0);
    // draw a rectangle
    graphics.beginFill(0xdddddd);
    graphics.lineStyle(2, 0xffffff, 1);
    graphics.drawRoundedRect(this.game.world.centerX - 100, this.game.world.centerY - 20, 200, 40, 6);

    var text = this.game.add.text(this.game.world.centerX - 50, this.game.world.centerY - 15, "开始游戏");

    text.inputEnabled = true;
    text.fill = "#fff";
    text.buttonMode = true;
    text.events.onInputDown.add(this.startGame, this);

  },

  update: function () {

  },

  startGame: function () {
    this.state.start('Game');
  }

};
