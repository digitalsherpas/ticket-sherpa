'use strict';
const alert = function(){};
const awsCognitoController = require('./awsCognitoController.js');
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const config = require('../../config');
const keys = require('../../keys');
const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
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
  console.log(req.body);
  awsCognitoController.registerUser(req.body.token, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/verifyUser', (req, res) => {
  let token = jwt.decode(req.body.token, {complete: true});
  console.log(req.body);
  let userPoolUrl = 'https://cognito-idp.us-west-2.amazonaws.com/us-west-2_q8JXfprZ3';
  let userPoolJwkUrl = userPoolUrl + '/.well-known/jwks.json';
  rp({ //TODO: put this in a worker
    url: userPoolJwkUrl,
  }).then((obj) => {
    // console.log(obj);
    let jwtSet = JSON.parse(obj);
    let jwtSetObj = {};
    jwtSet.keys.forEach((tkn) => {
      jwtSetObj[tkn.kid] = tkn;
    });

    var userJwk = jwtSetObj[token.header.kid];
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
    console.log(token);
    let isVerified = jwt.verify(req.body.token, jwkToPem(userJwk));
    if (isVerified) {
      res.status(200).send(token.payload.username);
      return;
    } else {
      res.status(403).send('Authorization failed');
      return;
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err.error);
  });

})

app.listen(config.AUTH_SERVER_PORT);