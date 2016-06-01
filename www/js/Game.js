Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
   
  },

  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
