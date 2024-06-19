### Express request lesson

```
// Syntax
// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the port number where the server will listen
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

```

```
// GET Request
app.get('/example', (req, res) => {
    res.send('This is a GET request');
});
```