Growth.Game = function (game) {


};

Growth.Game.prototype = {

  drawScore: function () {
    if (Growth.scoreText != null) {
      Growth.scoreText.kill();
    }
    var scoreFont = {
      fontSize: "28px",
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: 400,
      align: "center"
    };
    Growth.scoreText = this.game.add.text(this.game.width - 140, 10, "Score: " + Growth.score, scoreFont);
  },
  drawAnswers: function (correctAnswer) {
    var otherAnswers = [];
    otherAnswers.push(correctAnswer);

    while (otherAnswers.length <= Math.min(3, Growth.languages.length) - 1) {
      var temp = Growth.languages[Math.floor(Math.random() * Growth.languages.length)];
      if (!_.includes(temp, otherAnswers)) {
        otherAnswers.push(temp);
      }
    }
    for (var i = 0; i < otherAnswers.length; i++) {
      var anwserButtonStyle = {
        fontSize: "24px",
        fill: "#FFFFFF",
        wordWrap: true,
        wordWrapWidth: 400,
        align: "center"
      };
      var anwserButton = this.game.add.text(this.game.width / 3, i * 40 + 250, otherAnswers[i], anwserButtonStyle);
      anwserButton.smoothed = false;
      anwserButton.inputEnabled = true;
      (function(x) {
        anwserButton.events.onInputDown.add(function(){

        }, this);
      }) (i);
    }
  },
  create: function () {
    this.drawScore();
    this.game.stage.backgroundColor = '#0072bc';
    var choiceLanguage = 'C';

    var currentLanguageOriginText = this.game.cache.getText('language.' + choiceLanguage);
    var currentLanguageTextArray = currentLanguageOriginText.split('\n');

    this.renderText(currentLanguageTextArray);
    this.drawAnswers(choiceLanguage);
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
