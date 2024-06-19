// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require('dotenv').config(); // allows us to use environmental variables in the file
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // port is passed in
});
