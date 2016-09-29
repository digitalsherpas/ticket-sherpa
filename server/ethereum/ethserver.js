const config = require('../../config');
const express = require('express');
const ethController = require('./ethController.js');
const bodyParser = require('body-parser');

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

/* Example body of JSON request
{
  "ticketPrice":"10",
  "eventName" : "The Best Event",
  "quota" : "100",
  "senderAddress": "0x4dad76b49a53f22b80b18b276234365d54de8c19",
  "startDateTime": "",
  "endDateTime": "",
}
*/
app.post('/api/createEvent', (req, res) => {
  ethController.createEvent(req, res);
});

/* Example body of JSON request
{
  "contractAddress": "0x59dec10512ca71cdaf55a9d99ad098bc4131e9f1",
  "fromAddress": "0xfa6a88ff72f079e611ab427653eff5ce99cb26b9",
  "name": "Andrew"
}
*/
app.post('/api/buyTicket', (req, res) => {
  ethController.buyTicket(req, res);
});

app.post('/api/getNumAttendees', (req, res) => {
  ethController.getNumAttendees(req, res);
});

app.post('/api/verifyAttendee', (req, res) => {
  ethController.verifyAttendee(req, res);
});

// Retrieves an event based on event name.
// Look at server.js webserver to see where this is called.
app.get('/api/findEvent/', (req, res) => {
  ethController.findEvent(req, res);
});

const server = app.listen(config.ETH_SERVER_PORT, () => {
  console.log('Running on', config.ETH_SERVER_PORT);
});

module.exports = server;
