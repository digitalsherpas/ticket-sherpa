'use strict'

const fs = require('fs');
const express = require('express');
const path = require('path');
const config = require('../config');
const rp = require('request-promise');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../webpack.config.js');
const session = require('express-session');
const favicon = require('serve-favicon');
const keys = require('../keys.js');

const app = express();

app.use(session({
  secret: keys.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
app.use(jsonParser);

if (process.env.NODE_ENV !== 'production') {
  console.log('Loading hot reloader');
  const webpackcompiler = webpack(webpackconfig);

  // enable webpack middleware for hot-reloads in development
  const useWebpackMiddleware = (expressApp) => {
    expressApp.use(webpackDevMiddleware(webpackcompiler, {
      publicPath: '/',
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
}

// serves favicon
app.use(favicon(path.join(__dirname, '/../client/styles/images/favicon.ico')));

// main server
app.use(express.static(path.join(__dirname, '/../dist')));

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
      url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/findEvent`,
      qs: {
        eventName: req.query.eventName,
      },
      json: true,
    };
  } else {
    reqObj = {
      url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/getAllEvents`,
    };
  }

  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/api/dbEvents', (req, res) => {
  if (!req.query.eventName) {
    res.status(500).send('Please specify an event name');
  } else {
    const reqObj = {
      url: `${config.DB_SERVER_URL}:${config.DB_SERVER_PORT}/db/findEvent`,
      qs: {
        eventName: req.query.eventName,
      },
      json: true,
    };
    rp(reqObj).then((obj) => {
      res.status(200).send(obj);
    }).catch((err) => {
      res.status(500).send('Error occured when fetching information from the database:', err);
    });
  }
});

app.get('/api/eventsList', (req, res) => {
  const reqObj = {
    url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/eventsList`,
    json: true,
    qs: {
      readFromDB: req.query.readFromDB,
      eventName: req.query.eventName,
    },
  };
  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/api/HostEventsList', (req, res) => {
  const reqObj = {
    url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/HostEventsList`,
    json: true,
    qs: {
      readFromDB: req.query.readFromDB,
      hostName: req.query.hostName,
    },
  };
  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/api/searchEvents', (req, res) => {
  const reqObj = {
    url: `${config.ES_SERVER_URL}:${config.ES_SERVER_PORT}/api/events`,
    json: true,
    qs: {
      eventName: req.query.eventName,
    },
  };
  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/api/getTickets', (req, res) => {
  const reqObj = {
    url: `${config.DB_SERVER_URL}:${config.DB_SERVER_PORT}/db/getTickets`,
    json: true,
    qs: {
      readFromDB: req.query.readFromDB,
      userName: req.query.userName,
    },
  };
  rp(reqObj).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

/* Example body of JSON request
{
  "price":"10",
  "eventName" : "The Best Event",
  "quota" : "100",
  "senderAddress": "0x4dad76b49a53f22b80b18b276234365d54de8c19",
  "startDateTime": "2016-09-30T10:00",
  "endDateTime": "2016-09-30T12:00"
}
*/
app.post('/api/events', (req, res) => {
  // posts to ethereum
  rp({
    method: 'POST',
    url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/events`,
    body: req.body,
    json: true,
  })
  .then((event) => {
    res.status(200).send(event);
  }).catch((err) => {
    res.status(500).send(err);
  });
});
// // posts to elasticsearch
// rp({
//   method: 'POST',
//   url: `${config.SERVER_URL}:${config.ES_SERVER_PORT}/api/events`,
//   body:{},
//   json: true,
// })
// .then((obj) => {
//   res.status(200).send(obj);
// }).catch((err) => {
//   res.status(500).send(err);
// });



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
    url: `${config.ETH_SERVER_URL}:${config.ETH_SERVER_PORT}/api/tickets`,
    body: req.body,
    json: true,
  })
  .then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

/* Example body of JSON request
{
  "contractAddress": "0x59dec10512ca71cdaf55a9d99ad098bc4131e9f1",
  "fromAddress": "0xfa6a88ff72f079e611ab427653eff5ce99cb26b9",
}
*/
app.post('/db/addEventToUser', (req, res) => {
  rp({
    method: 'POST',
    url: `${config.DB_SERVER_URL}:${config.DB_SERVER_PORT}/db/addEventToUser`,
    body: req.body,
    json: true,
  }).then((event) => {
    res.status(200).send(event);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

/* Example body of JSON request
{
  "username": "unique_username",
  "password": "password",
  "name": "John Doe",
  "email": "john@doe.com"
}
*/
app.post('/registerUser', (req, res) => {
  rp({
    method: 'POST',
    url: `${config.AUTH_SERVER_URL}:${config.AUTH_SERVER_PORT}/registerUser`,
    body: req.body,
    json: true,
  }).then((obj) => {
    res.status(200).send(obj);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

app.get('/getUserSession', (req, res) => {
  if (req.get('Authorization')) {
    const token = req.get('Authorization').slice(7);
    rp({
      method: 'POST',
      url: `${config.AUTH_SERVER_URL}:${config.AUTH_SERVER_PORT}/verifyUser`,
      body: { token },
      json: true,
    }).then((obj) => {
      req.session.user = obj;
      res.status(200).send(obj);
    }).catch((err) => {
      res.status(500).send(err);
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

app.listen(config.WEB_SERVER_PORT);
console.log(`Server listening on port: ${config.WEB_SERVER_PORT}`);
