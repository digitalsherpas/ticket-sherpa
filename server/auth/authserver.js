const awsCognitoController = require('./awsCognitoController.js');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../../config');

const jsonParser = bodyParser.json();
const app = express();

const allowCrossDomain = (req, res, next) => { // enable CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Max-Age', 10);
  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(jsonParser);

app.post('/registerUser', (req, res) => {
  awsCognitoController.registerUser(req.body.token, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/verifyUser', (req, res) => {
  awsCognitoController.verifyUser(req.body.token, (error, result) => {
    if (result === 'Authorization failed') {
      res.status(403).send(result);
    } else if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(config.AUTH_SERVER_PORT);
