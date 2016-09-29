module.exports = function (grunt) {
// config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
      dist: {
        files: {
          'compiled/index.html': ['client/index.html'],
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
      startEthServer: {
        command: 'nodemon server/ethereum/ethserver.js',
      },
      startAuthServer: {
        command: 'nodemon server/auth/authserver.js',
      },
      setup: {
        command: 'node setup.js',
      },
    }
  });

// dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-processhtml');

// tasks
  grunt.registerTask('build', [
    'shell:compile',
    'processhtml',
  ]);

  grunt.registerTask('setup', ['shell:setup']);

  grunt.registerTask('startServer', ['shell:startDevServer']);

  grunt.registerTask('dev', ['build', 'startServer']);

  grunt.registerTask('eth', ['shell:startEthServer']);

  grunt.registerTask('auth', ['shell:startAuthServer']);
};
