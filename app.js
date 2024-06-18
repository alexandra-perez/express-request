// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to my Express app');
});

// EXPORT
module.exports = app;