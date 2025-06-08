const express = require('express');
const app = express();

app.use(express.json()); // json format v

// Add a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

module.exports = app;