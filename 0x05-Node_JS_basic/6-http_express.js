const express = require('express');

const port = 1245;
const app = express();

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

app.get('/', (_, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

module.exports = app;
