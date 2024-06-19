// DEPENDENCIES
const express = require('express');
const colors = require('./models/color.js');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to my Express app');
});

// send the mock data based on a request
app.get('/colors', (req, res) => {
  res.send(colors);
});

// EXPORT
module.exports = app;