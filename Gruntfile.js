const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

module.exports = (grunt) => {
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
      startServer: {
        command: 'NODE_ENV=PRODUCTION node server/server.js',
      },
      buildProduction: {
        command: 'node ./node_modules/webpack/bin/webpack.js -p --config webpack.production.config.js --progress --colors',
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
  grunt.registerTask('dev', [
    'build',
    'shell:startDevServer',
  ]);
  grunt.registerTask('prod', [
    'less',
    'processhtml',
    'shell:buildProduction',
    'shell:startServer',
  ]);
  grunt.registerTask('build', [
    'less',
    'processhtml',
    'shell:compile',
  ]);
};
