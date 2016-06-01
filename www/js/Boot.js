Growth = {
  score: 0,
  music: null,
  orientated: false
};

Growth.Boot = function (game) {
};

Growth.Boot.prototype = {

  preload: function () {
    this.game.stage.backgroundColor = "#eaeaea";
  },

  create: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 480;
    this.scale.minHeight = 260;
    this.scale.maxWidth = 1024;
    this.scale.maxHeight = 768;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(true, false);
    this.scale.setResizeCallback(this.gameResized, this);
    this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
    this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    this.scale.updateLayout(true);

    this.state.start('Preloader');
  },

  gameResized: function (width, height) {},

  enterIncorrectOrientation: function () {
    Growth.orientated = false;
    document.getElementById('orientation').style.display = 'block';
  },

  leaveIncorrectOrientation: function () {
    Growth.orientated = true;
    document.getElementById('orientation').style.display = 'none';

  }
};
