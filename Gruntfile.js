module.exports = function(grunt) {

//config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
      dist: {
        files: {
          'compiled/index.html': ['index.html']
        }
      }
    },
    shell: {
      options: {
        stderr: false
      },
      compile: {
        command: 'webpack'
      },
      startDevServer: {
        command: 'node server.js'
      },
      eslint: {
        command: 'eslint "**/*.js" "**/*.jsx"'
      }
      // copy: {
      //   command: 'cp smallwatch_sepia.mp4 compiled/smallwatch_sepia.mp4'
      // }
    }

    // clean: ['compiled/*']

    // cssmin: {
    //   options: {
    //     shorthandCompacting: false,
    //     roundingPrecision: -1
    //   },
    //   target: {
    //     files: {
    //       'compiled/styles.css': ['styles.css']
    //     }
    //   }
    // }
  });

//dependencies
  grunt.loadNpmTasks('grunt-shell');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');

//tasks
  grunt.registerTask('build', [
    // 'clean',
    'shell:compile',
    'processhtml'
    // 'cssmin',
    // 'shell:copy'
  ]);

  grunt.registerTask('eslint', ['shell:eslint']);
  
  grunt.registerTask('start', ['shell:startDevServer']);
};