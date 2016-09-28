'use strict';

const express = require('express');
const path = require('path');
const config = require('../config');
const app = express();
const opn = require('opn');

const webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  webpackconfig = require('../webpack.config.js'),
  webpackcompiler = webpack(webpackconfig);
 
//enable webpack middleware for hot-reloads in development
let useWebpackMiddleware = (app) => {
  app.use(webpackDevMiddleware(webpackcompiler, {
    publicPath: webpackconfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
      'errors-only': true
    }
  }));
  app.use(webpackHotMiddleware(webpackcompiler, {
    log: console.log
  }));

  return app;
}

const http = require('http').Server(app);

useWebpackMiddleware(app);

// main server
app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res) {
  console.log(index);
  res.render('index');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.listen(config.SERVER_PORT);
