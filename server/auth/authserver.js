'use strict';

const awsCognito = require('./awsCognito.js');
const express = require('express');

app.post('/registerUser', (req, res) => {
  awsCognito.registerUser(req.body);
});