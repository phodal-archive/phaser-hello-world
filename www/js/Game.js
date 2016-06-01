Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    var text = this.game.add.text(0, 0, "游戏开始中。。。");
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
