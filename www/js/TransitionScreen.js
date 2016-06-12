Growth.TransitionScreen = function (game) {
  this.game = game;
};

Growth.TransitionScreen.prototype = {

  create: function () {
    var game = this.game;

    var manager = this.game.plugins.add(Phaser.ParticleStorm);

    var data = {
      lifespan: 2000,
      image: 'pixel_white',
      vx: {min: -2, max: 2},
      vy: {min: 1, max: 3},
      scale: 0.5
    };

    manager.addData('basic', data);

    var text = game.add.text(-100, -100, 'DONE', {font: '32px serif'});
    var grd = text.context.createLinearGradient(0, 0, 0, text.height);

    //  Add in 2 color stops
    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#004CB3');

    //  And apply to the Text
    text.fill = grd;

    var textZone = manager.createTextZone(text);
    textZone.scale.set(4);

    var emitter = manager.createEmitter();
    emitter.addToWorld();


    emitter.emit('basic', 150, 150, {
      zone: textZone,
      full: true,
      setColor: true,
      setAlpha: true,
      delay: {start: 1000, step: 10, visible: true}
    });

    this.game.stage.backgroundColor = "#424242";

    this.game.add.text(this.game.world.centerX - 100, this.game.world.centerY - 65, "You scored: " + Growth.score, Growth.scoreFont);

    var graphics = this.game.add.graphics(0, 0);
    // draw a rectangle
    graphics.beginFill(0x424242);
    graphics.lineStyle(1, 0xffffff, 1);
    graphics.drawRoundedRect(this.game.world.centerX - 100, this.game.world.centerY - 20, 200, 40, 6);

    var text = this.game.add.text(this.game.world.centerX - 50, this.game.world.centerY - 15, "继续游戏");

    text.inputEnabled = true;
    text.fill = "#fff";
    text.buttonMode = true;
    text.events.onInputDown.add(this.startGame, this);
  },
  startGame: function () {
    this.game.state.start('Game')
  }

};
