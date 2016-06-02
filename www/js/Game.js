Growth.Game = function (game) {


};

Growth.Game.prototype = {

  create: function () {
    this.game.stage.backgroundColor = '#0072bc';
    var html = this.game.cache.getText('language.C');
    var text = html.split('\n');
    this.renderText(text);
  },

  renderText: function (text) {
    var style = {
      font: "20px Console",
      fill: "#fff",
      wordWrap: true,
      wordWrapWidth: this.game.width,
      align: "center"
    };
    for (var i = 0; i < 10; i++) {
      if(text[i] !== undefined){
        this.game.add.text(80, 120 + i * 24 , text[i], style);
      }
    }

  },
  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
