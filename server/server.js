'use strict';

const express = require('express');
const ethController = require('./ethereum/ethController.js');
let app = express();
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
const port = process.env.PORT || 3000;

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

app.listen(3000);

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

  console.log('Listening at http://localhost:3001/');
});
