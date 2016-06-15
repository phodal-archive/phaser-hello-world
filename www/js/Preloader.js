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
    this.load.text('language.Arduino', 'data/Arduino.ino');
    this.load.text('language.ASP', 'data/ASP.asp');
    this.load.text('language.BASH', 'data/BASH.bash');
    this.load.text('language.BATCH', 'data/BATCH.bat');
    this.load.text('language.CoffeeScript', 'data/CoffeeScript.coffee');
    this.load.text('language.CSharp', 'data/CSharp.cs');
    this.load.text('language.DOS', 'data/DOS.bat');
    this.load.text('language.Fortran', 'data/Fortran.f90');
    this.load.text('language.Lua', 'data/Lua.lua');
    this.load.text('language.Markdown', 'data/Markdown.md');
    this.load.text('language.MATLAB', 'data/MATLAB.m');
    this.load.text('language.MySQL', 'data/MySQL.sql');
    this.load.text('language.Node', 'data/Node.js');
    this.load.text('language.Octave', 'data/Octave.octave');
    this.load.text('language.Python', 'data/Python.py');
    this.load.text('language.Python3', 'data/Python3.py');
    this.load.text('language.Ruby', 'data/Ruby.py');
    this.load.text('language.Shell', 'data/Shell.sh');
    this.load.text('language.VisualBasic', 'data/VisualBasic.vb');
    this.load.text('language.XML', 'data/XML.xml');
    this.load.text('language.ActionScript3','data/ActionScript3.as');
    this.load.text('language.AppleScript','data/AppleScript.scpt');
    this.load.text('language.Assembler','data/Assembler_intel.asm');
    this.load.text('language.CLisp','data/CLisp.lisp');
    this.load.text('language.Clojure','data/Clojure.clj');
    this.load.text('language.DART','data/DART.dart');
    this.load.text('language.Delphi','data/Delphi.delphi');
    this.load.text('language.Erlang','data/Erlang.erl');
    this.load.text('language.Go','data/Go.go');
    this.load.text('language.Groovy','data/Groovy.groovy');
    this.load.text('language.Jade','data/Jade.jade');
    this.load.text('language.Linux-x86','data/Linux-x86.nasm');
    this.load.text('language.Lisp','data/Lisp.lsp');
    this.load.text('language.Morsecode', 'data/Morsecode');
    this.load.text('language.Objective-C.m', 'data/Objective-C.m');
    this.load.text('language.Perl','data/Perl.pl');
    this.load.text('language.PostScript','data/PostScript.ps');
    this.load.text('language.R','data/R.R');
    this.load.text('language.Rust','data/Rust.rs');
    this.load.text('language.Scala','data/Scala.scala');
    this.load.text('language.Swift','data/Swift.swift');
    this.load.text('language.Tcl','data/Tcl.tcl');
    this.load.text('language.Tk','data/Tk.tk');
    Growth.languages = [
      'C', 'CSS', 'HTML', 'Java', 'JavaScript', 'PHP', 'Arduino', 'ASP', 'BASH', 'BATCH', 'CoffeeScript', 'CSharp',
      'DOS', 'Fortran', 'Lua', 'Markdown', 'MATLAB', 'MySQL', 'Node', 'Octave', 'Python', 'Python3', 'Ruby',
      'Shell', 'VisualBasic', 'XML', 'ActionScript3', 'AppleScript', 'Assembler_intel', 'CLisp', 'Clojure', 'DART',
      'Delphi', 'Erlang', 'Go', 'Groovy', 'Jade', 'Linux-x86', 'Lisp', 'Morsecode', 'Objective-C', 'Perl', 'PostScript',
      'R.R', 'Rust', 'Scala', 'Swift', 'Tcl', 'Tk'
]
  },
  preload: function () {
    this.game.stage.backgroundColor = "#424242";
    this.loadLanguages();
    this.load.image('logo', 'images/logo.png');
    this.load.path = 'images/particles/';
    this.load.images(['pixel_white', '4x4']);

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
