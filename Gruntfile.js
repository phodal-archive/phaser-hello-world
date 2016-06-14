module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    compile_dir: 'www',

    helloworld: [
      'www/js/index.js',
      'www/js/Boot.js',
      'www/js/Preloader.js',
      'www/js/MainMenu.js',
      'www/js/Game.js',
      'www/js/TransitionScreen.js'
    ],

    clean: ['<%= compile_dir %>'],

    concat: {
      helloworld: {
        src: ['<%= helloworld %>'],
        dest: '<%= compile_dir %>/helloworld.js'
      }
    },

    uglify: {
      helloworld: {
        options: {
          banner: '/* helloworld by Phodal */\n'
        },
        src: ['<%= concat.helloworld.dest %>'],
        dest: '<%= compile_dir %>/helloworld.min.js'
      }
    },

    copy: {
      main: {
        files: [
          {src: ['dist/helloworld.min.js'], dest: 'js/helloworld.min.js'}
        ]
      }
    }

  });

  grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};
