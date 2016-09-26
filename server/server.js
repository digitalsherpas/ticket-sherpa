var express = require('express');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
var app = express();

// main server
app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res) {
  console.log(index);
  res.render('index');
});

app.get('/host', function(req, res) {
  res.send('Host Page');
})

app.listen(3000);

// web3 server
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

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
