const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    const msgTitle = 'This is the list of our students\n';
    await countStudents('databse.csv')
      .then((students) => {
        res.write(`${msgTitle}${students}`);
      })
      .catch((err) => {
        res.write(`${msgTitle}${err.message}`);
      });
  }
  res.end();
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = app;
