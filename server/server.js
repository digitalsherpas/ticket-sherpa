'use strict';

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');
const ethController = require('./ethereum/ethController.js');
const port = process.env.PORT || 3000;
const app = express();

// main server
app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res) {
  console.log(index);
  res.render('index');
});

app.get('/host', function(req, res) {
  res.send('Host Page');
})

app.post('/api/createEvent', (req, res) => {
  ethController.createEvent(req, res);
});

app.listen(port);
console.log('Listening at port: ' + port);

// webpack proxy
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Webpack Dev Server listening at http://localhost:3001/');
});
