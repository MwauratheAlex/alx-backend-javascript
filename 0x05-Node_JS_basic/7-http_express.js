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
  res.write('This is the list of our students\n');
  await countStudents(db)
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.send(`${err.message}`);
    });
});

module.exports = app;
