const awsCognitoController = require('./awsCognitoController.js');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('../../config');
// const keys = require('../../keys');
const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const dbController = require('../database/dbController.js');

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
  const token = jwt.decode(req.body.token, { complete: true });
  const userPoolUrl = 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_q8JXfprZ3';
  const userPoolJwkUrl = `${userPoolUrl}/.well-known/jwks.json`;
  // TODO: put this in a worker
  rp({
    url: userPoolJwkUrl,
  }).then((obj) => {
    const jwtSet = JSON.parse(obj);
    const jwtSetObj = {};
    jwtSet.keys.forEach((tkn) => {
      jwtSetObj[tkn.kid] = tkn;
    });

    const userJwk = jwtSetObj[token.header.kid];
    if (userJwk === undefined) {
      res.status(403).send('Authorization failed');
      return;
    }
    if (token.payload.iss !== userPoolUrl) {
      res.status(403).send('Authorization failed');
      return;
    }
    if (token.payload.token_use !== 'access') {
      res.status(403).send('Authorization failed');
      return;
    }
    const isVerified = jwt.verify(req.body.token, jwkToPem(userJwk));
    if (isVerified) {
      dbController.findOrCreateUser({
        username: token.payload.username,
      }, res);
      return;
    }
    res.status(403).send('Authorization failed');
    return;
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err.error);
  });
});

app.listen(config.AUTH_SERVER_PORT);
