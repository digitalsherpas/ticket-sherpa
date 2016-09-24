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
      }
    }

  });

//dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-processhtml');

//tasks
  grunt.registerTask('build', [
    'shell:compile',
    'processhtml'
  ]);

  grunt.registerTask('startServer', ['shell:startDevServer']);

  grunt.registerTask('start', ['build', 'startServer']);
};