'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.src %>/js/*.js'],
        dest: '<%= config.dist %>/js/build/production.js'
      }
    },

    uglify: {
      build: {
        src: '<%= config.dist %>/js/build/production.js',
        dest: '<%= config.dist %>/js/build/production.min.js'
      }
    },

    sass: {
      dist: {
        files: {
          '<%= config.src %>/css/build/main.css' : '<%= config.src %>/css/scss/main.scss'
        }
      }
    },

    watch: {
      assemble: {
      files: ['<%= config.src %>/{content,data,templates,css/scss,js}/{,*/}*.{md,hbs,yml,scss,js}'],
      tasks: ['build']
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
    '<%= config.dist %>/{,*/}*.html',
  '<%= config.dist %>/{,*/}*.scss',
'<%= config.dist %>/{,*/}*.js',
'<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
]
}
},

cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: '<%= config.src %>/css/build',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.src %>/css/build',
      ext: '.min.css'
    }]
  }
},

autoprefixer: {
  dev: {
    files: {
      '<%= config.src %>/css/build/main.css': ['<%= config.src %>/css/build/main.css']
    }
  }
},

connect: {
  options: {
    port: 9000,
    livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
          '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          expand: true,
          assets: '<%= config.dist %>/assets',
          layout: 'default.hbs',
          layoutdir: '<%= config.src %>/templates/layouts/',
          data: '<%= config.src %>/data/*.{json,yml}',
        partials: '<%= config.src %>/templates/partials/{,*/}*.hbs'
      },
      files: [{
        expand: true,
        cwd: '<%= config.src %>/templates/pages',
        src: ['**/*.hbs'],
        dest: '<%= config.dist %>'
      }]
    }
  },

  copy: {
    theme: {
      expand: true,
      cwd: '<%= config.src %>/css/',
      src: '**/*.{css,eot,ttf,woff,svg}',
      dest: '<%= config.dist %>/css/'
    },
    images: {
      expand: true,
      cwd: '<%= config.src %>/templates/assets/images',
      src: '**',
      dest: '<%= config.dist %>/images'
    },
    assets: {
      expand: true,
      flatten: true,
      cwd: '<%= config.src %>/templates/assets',
      src: '**',
      dest: '<%= config.dist %>/'
    }
  },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

grunt.loadNpmTasks('assemble');

grunt.registerTask('server', [
  'build',
  'connect:livereload',
  'watch'
  ]);

grunt.registerTask('build', [
  'clean',
  'concat',
  'uglify',
  'sass',
  'autoprefixer',
  'cssmin',
  'copy',
  'assemble'
  ]);

grunt.registerTask('default', [
  'build'
  ]);

};
