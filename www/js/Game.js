Growth.Game = function (game) {


};

Growth.Game.prototype = {

  drawScore: function () {
    if (Growth.scoreText != null) {
      Growth.scoreText.kill();
    }
    Growth.scoreFont = {
      fontSize: "28px",
      fill: "#FFFFFF",
      wordWrap: true,
      wordWrapWidth: 400,
      align: "center"
    };
    Growth.scoreText = this.game.add.text(this.game.width - 140, 10, "Score: " + Growth.score, Growth.scoreFont);
  },
  shuffle: function (answers) {
    return _.shuffle(answers);
  },
  checkAnswer: function (otherAnswers, x, correctAnswer) {
    if (otherAnswers[x] === correctAnswer) {
      Growth.score = Growth.score + 10;
      Growth.scoreText.text = "Score: " + Growth.score ;
    }
    this.state.start('TransitionScreen');
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
        fill: "#328332",
        wordWrap: true,
        wordWrapWidth: 400,
        align: "center"
      };
      var answerButton = this.game.add.text(40 + (this.game.width - 40) / 3 * i, 250, otherAnswers[i], answerButtonStyle);
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
    this.game.stage.backgroundColor = '#424242';

    var number = _.random(Growth.languages.length - 1);
    var choiceLanguage = Growth.languages[number];

    this.renderText(choiceLanguage);
    this.drawAnswers(choiceLanguage);
  },

  renderText: function (choiceLanguage) {
    var currentLanguageOriginText = this.game.cache.getText('language.' + choiceLanguage);
    var text = currentLanguageOriginText.split('\n');

    var style = {
      font: "20px Console",
      fill: "#328332",
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
