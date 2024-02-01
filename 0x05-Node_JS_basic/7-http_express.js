const express = require('express');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
const port = 1245;
const app = express();
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const title = 'This is the list of our students\n';
  countStudents(databaseFile)
    .then((report) => {
      res.send(`${title}${report}`);
    })
    .catch((err) => {
      res.send(`${title}${err instanceof Error ? err.message : err.toString()}`);
    });
});

module.exports = app;
