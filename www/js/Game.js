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
  shuffle: function (answers) {
    return _.shuffle(answers);
  },
  checkAnswer: function (otherAnswers, x, correctAnswer) {
    if (otherAnswers[x] === correctAnswer) {
      Growth.scoreText = Growth.scoreText + 10;
    }
  },
  drawAnswers: function (correctAnswer) {
    var self = this;
    var otherAnswers = [];
    otherAnswers.push(correctAnswer);

    while (otherAnswers.length <= Math.min(3, Growth.languages.length) - 1) {
      var temp = Growth.languages[Math.floor(Math.random() * Growth.languages.length)];
      if (!_.includes(otherAnswers, temp)) {
        otherAnswers.push(temp);
      }
    }

    otherAnswers = this.shuffle(otherAnswers);

    for (var i = 0; i < otherAnswers.length; i++) {
      var answerButtonStyle = {
        fontSize: "24px",
        fill: "#FFFFFF",
        wordWrap: true,
        wordWrapWidth: 400,
        align: "center"
      };
      var answerButton = this.game.add.text(180 + (this.game.width - 180) / 3 * i, 250, otherAnswers[i], answerButtonStyle);
      answerButton.smoothed = false;
      answerButton.inputEnabled = true;
      (function (x) {
        answerButton.events.onInputDown.add(function () {
          self.checkAnswer(otherAnswers, x, correctAnswer);
        }, this);
      })(i);
    }
  },
  create: function () {
    this.drawScore();
    this.game.stage.backgroundColor = '#0072bc';

    var choiceLanguage = 'C';
    this.renderText(choiceLanguage);
    this.drawAnswers(choiceLanguage);
  },

  renderText: function (choiceLanguage) {
    var currentLanguageOriginText = this.game.cache.getText('language.' + choiceLanguage);
    var text = currentLanguageOriginText.split('\n');

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
