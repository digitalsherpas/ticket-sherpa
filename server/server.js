'use strict';

// SSL dependencies
// const fs = require('fs');;
// const https = require('https');
// const letsencrypt = require('letsencrypt');

const express = require('express');
const path = require('path');
const config = require('../config');
const rp = require('request-promise');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');
const session = require('express-session');
const keys = require('../keys.js');
const app = express();

app.use(session({
  secret: keys.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

const bodyParser = require('body-parser');


// LetsEncrypt SSL settings

// const le = letsencrypt.create({ server: 'staging' });
// let opts = {
//   domains: ['lentan.info'], email: 'user@email.com', agreeTos: true
// };

// le.register(opts).then((certs) => {
//   console.log(certs);
// }).catch((error) => {
//   console.log(error);
// });

// app.use(le.middleware());

const jsonParser = bodyParser.json();
app.use(jsonParser);

const webpackcompiler = webpack(webpackconfig);

// enable webpack middleware for hot-reloads in development
const useWebpackMiddleware = (expressApp) => {
  expressApp.use(webpackDevMiddleware(webpackcompiler, {
    publicPath: webpackconfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false, // this reduces the amount of stuff I see in my terminal;
      // configure to your needs
      'errors-only': true,
    },
  }));

  expressApp.use(webpackHotMiddleware(webpackcompiler, {}));

  return expressApp;
};

useWebpackMiddleware(app);

// main server
app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => {
  res.render('index');
});

/* Example HTTP GET request
  http://localhost:3000/events?eventName=THIS IS A NEW EVENT
*/
// This endpoint retrieves details about a single event based on event name match.
// This makes a HTTP GET Request to the Ethereum server
app.get('/api/events', (req, res) => {
  let reqObj = {};
  if (req.query.eventName) {
    reqObj = {
      url: `${config.SERVER_URL}:${config.ETH_SERVER_PORT}/api/findEvent`,
      qs: {
        eventName: req.query.eventName,
      },
      json: true,
    };
  } else {
    reqObj = {
      url: `${config.SERVER_URL}:${config.ETH_SERVER_PORT}/api/getAllEvents`,
    };
  }

  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err.error);
  });
});

/* Example body of JSON request
{
  "ticketPrice":"10",
  "eventName" : "The Best Event",
  "quota" : "100",
  "senderAddress": "0x4dad76b49a53f22b80b18b276234365d54de8c19",
  "startDateTime": "2016-09-30T10:00",
  "endDateTime": "2016-09-30T12:00"
}
*/
app.post('/api/events', (req, res) => {
  rp({
    method: 'POST',
    url: `${config.SERVER_URL}:${config.ETH_SERVER_PORT}/api/events`,
    body: req.body,
    json: true,
  })
  .then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err.error);
  });
});


/* Example body of JSON request
{
  "contractAddress": "0x59dec10512ca71cdaf55a9d99ad098bc4131e9f1",
  "fromAddress": "0xfa6a88ff72f079e611ab427653eff5ce99cb26b9",
  "name": "Andrew"
}
*/
app.post('/api/tickets', (req, res) => {
  rp({
    method: 'POST',
    url: `${config.SERVER_URL}:${config.ETH_SERVER_PORT}/api/tickets`,
    body: req.body,
    json: true,
  })
  .then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err.error);
  });
});

app.post('/registerUser', (req, res) => {
  rp({
    method: 'POST',
    url: `${config.SERVER_URL}:${config.AUTH_SERVER_PORT}/registerUser`,
    body: req.body,
  }).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err.error);
  });
});

app.get('/getUserSession', (req, res) => {
  if (req.get('Authorization')) {
    const token = req.get('Authorization').slice(7);
    rp({
      method: 'POST',
      url: `${config.SERVER_URL}:${config.AUTH_SERVER_PORT}/verifyUser`,
      body: { token },
      json: true,
    }).then((obj) => {
      req.session.user = obj;
      res.status(200).send(obj);
    }).catch((err) => {
      res.status(500).send(err.error);
    });
  } else {
    res.status(403).send('Authorization failed');
  }
});

app.get('/getUser', (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(500).send('Not Authenticated');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

// Manual SSL settings (for development)
// const credentials = {
//   cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
//   key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')) 
// };

// https.createServer(credentials, app).listen(config.SERVER_PORT);

app.listen(config.SERVER_PORT);
