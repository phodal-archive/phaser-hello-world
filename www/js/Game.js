Growth.Game = function (game) {


};

Growth.Game.prototype = {

  drawScore: function () {
    if (Growth.scoreText != null) {
      Growth.scoreText.kill();
    }
    var scoreFont = {
      font: "2px 'Press Start 2P'",
      fontSize: "28px",
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: 400,
      align: "center"
    };
    Growth.scoreText = this.game.add.text(this.game.width - 140, 10, "Score: " + Growth.score, scoreFont);
  },
  create: function () {
    this.drawScore();
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
      if (text[i] !== undefined) {
        this.game.add.text(80, 40 + i * 24, text[i], style);
      }
    }
  },
  gameOver: function () {

  },

  quitGame: function () {
    this.state.start('MainMenu');
  }
};
