module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['target/'],
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'target/css/main.css': 'src/sass/main.sass'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**.html',
        dest: 'target/',
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/main.js'],
        dest: 'target/js/scripts.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/main.js',
        dest: 'target/js/main.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'sass', 'copy', 'concat', //'uglify'
  ]);
};
