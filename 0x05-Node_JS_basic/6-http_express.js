const express = require('express');

const port = 1245;
const app = express();
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
