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
// INDEX
app.get('/colors', (req, res) => {
  res.send(colors);
});


app.get('/colors/cool', (req, res) => {
  res.send(`
 <body
 style="background: linear-gradient(to bottom, ${colors[0]} 16%, ${colors[1]} 32%, ${colors[2]} 48%, ${colors[3]} 64%, ${colors[4]} 80%, ${colors[5]} 100%)"
 >
 <h1>Colors are cool!</h1>
 </body>
 `);
});

// More specific routes come before less particular routes (those with params in them).

// SHOW
// take ID as a parameter
app.get('/colors/:id', (req, res) => {
  const { id } = req.params;
  const color = colors.find((color) => color.id === Number(id));
  if (color) {
    res.send(color);
  } else {
    res.send('Cannot find any colors with this id: ' + id);
  }
});

app.get('/hello/:user/:food', (req, res) => {
  console.log(req.params);
  const { food, user } = req.params;
  res.send(`My name is ${user} and my favorite food is ${food}`);
});

//  Incoming requests always come in as strings. Therefore they must be converted to numbers.
// app.get('/calculator/:operator', (req, res) => {
//   const { num1, num2 } = req.query;
//   let sum = 0;
//   if (req.params.operator === 'add') {
//     sum = Number(num1) + Number(num2);
//   }
//   res.send('sum is ' + sum);
// });

// app.get('/calculator/:operator', (req, res) => {
//   const { num1, num2 } = req.query;
//   let difference = 0;
//   if (req.params.operator === 'subtract') {
//     difference = Number(num1) - Number(num2);
//   }
//   res.send('difference is ' + difference);
// });

// app.get('/calculator/:operator', (req, res) => {
//   const { num1, num2 } = req.query;
//   let product = 0;
//   if (req.params.operator === 'multiply') {
//     product = Number(num1) * Number(num2);
//   }
//   res.send('product is ' + product);
// });

// app.get('/calculator/:operator', (req, res) => {
//   const { num1, num2 } = req.query;
//   let remainder = 0;
//   if (req.params.operator === 'divide') {
//     remainder = Number(num1) / Number(num2);
//   }
//   res.send('remainder is ' + remainder);
// });

// EXPORT
module.exports = app;