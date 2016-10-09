module.exports = function (grunt) {
// config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['client/index.html'],
        },
      },
    },
    shell: {
      options: {
        stderr: false,
      },
      compile: {
        command: 'node ./node_modules/webpack/bin/webpack.js',
      },
      startDevServer: {
        command: 'nodemon server/server.js',
      },
      startAuthServer: {
        command: 'nodemon server/auth/authserver.js',
      },
    },
    less: {
      build: {
        files: {
          'dist/main.css': 'client/styles/main.less', // destination file and source file
        },
      },
    },
  });

// dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-processhtml');

// tasks
  grunt.registerTask('build', [
    'less',
    'processhtml',
    'shell:compile',
  ]);

  grunt.registerTask('startServer', ['shell:startDevServer']);

  grunt.registerTask('dev', ['build', 'startServer']);

  grunt.registerTask('auth', ['shell:startAuthServer']);
};
