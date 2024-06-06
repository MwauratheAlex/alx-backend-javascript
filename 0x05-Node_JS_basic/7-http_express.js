const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const db = process.argv[2];
const app = express();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'plain/text');
  res.write('Hello Holberton School!');
  res.end();
});

app.get('/students', async (_, res) => {
  res.setHeader('Content-Type', 'plain/text');
  res.write('This is the list of our students\n');
  await countStudents(db)
    .then((students) => {
      res.write(students);
    })
    .catch((err) => {
      res.write(`${err.message}`);
    });

  res.end();
});

module.exports = app;
