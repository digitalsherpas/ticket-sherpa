const express = require('express');
const path = require('path');
// const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('../webpack.config')
const config = require('../config');
const app = express();
const request = require('request');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');

const webpackcompiler = webpack(webpackconfig);

// enable webpack middleware for hot-reloads in development
const useWebpackMiddleware = (expressApp) => {
  expressApp.use(webpackDevMiddleware(webpackcompiler, {
    publicPath: webpackconfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,  // this reduces the amount of stuff I see in my terminal;
                      // configure to your needs
      'errors-only': true,
    },
  }));
  expressApp.use(webpackHotMiddleware(webpackcompiler, {
  }));

  return expressApp;
};

useWebpackMiddleware(app);

// main server
app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/events', (req, res) => {
  request({'url': `${config.SERVER_URL}:${config.ETH_SERVER_PORT}/findEvent`,
  'qs': req.body.eventName});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

app.listen(config.SERVER_PORT);
