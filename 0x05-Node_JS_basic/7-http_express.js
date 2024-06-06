const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const db = process.argv[2];
const app = express();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  const title = 'This is the list of our students\n';

  await countStudents(db)
    .then((students) => {
      res.send(`${title}${students}`);
    })
    .catch((err) => {
      res.send(`${title}${err.message}`);
    });
});

module.exports = app;
