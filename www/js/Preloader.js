Growth.Preloader = function (game) {
  this.preloadBar = null;
  this.ready = false;
};

Growth.Preloader.prototype = {
  preload: function () {
    this.game.stage.backgroundColor = "#eee";
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
