Growth.Preloader = function (game) {
  this.ready = false;
};

Growth.Preloader.prototype = {
  loadLanguages: function () {
    this.load.text('language.C', 'data/C.c');
    this.load.text('language.CSS', 'data/CSS.css');
    this.load.text('language.HTML', 'data/HTML.html');
    this.load.text('language.Java', 'data/Java.Java');
    this.load.text('language.JavaScript', 'data/JavaScript.js');
    this.load.text('language.PHP', 'data/PHP.php');
    Growth.languages = [
      'C', 'CSS', 'HTML', 'Java', 'JavaScript', 'PHP'
    ]
  },
  preload: function () {
    this.game.stage.backgroundColor = "#424242";
    this.loadLanguages();
    this.load.image('logo', 'images/logo.png');
  },
  create: function () {
    var self = this;

    if (window.cordova) {
      var style = {
        font: "24px '微软雅黑'",
        fill: "#ddd",
        wordWrap: true,
        wordWrapWidth: this.game.width,
        align: "center"
      };

      this.welcomeText = this.game.add.text(this.game.width / 2, this.game.height - 20, "A Phodal Project", style);
      this.welcomeText.anchor.set(0.5);
      this.welcomeText.alpha = 1;

      var logo = self.game.add.sprite(self.game.world.centerX, self.game.world.centerY, 'logo');
      logo.anchor.setTo(0.5, 0.5);
      logo.alpha = 0;

      var tween = self.game.add.tween(logo).to({alpha: 1}, 2000, "Linear", true);
      tween.onComplete.add(function () {
        self.game.time.events.add(1200, function () {
          self.state.start('MainMenu');
        }, self);
      }, self);
      tween.start();
    } else {
      self.state.start('MainMenu');
    }
  },
  update: function () {

  }
};
