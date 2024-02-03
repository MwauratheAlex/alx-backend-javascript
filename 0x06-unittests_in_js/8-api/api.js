const express = require('express');

const port = 7865;
const app = express();

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

module.exports = app;
