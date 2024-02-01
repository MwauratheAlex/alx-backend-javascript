const http = require('http');

const port = 1245;
const hostname = 'localhost';
const databaseFile = (process.argv.length) > 2 ? process.argv[2] : '';
const countStudents = require('./3-read_file_async');

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
    return;
  } if (url === '/students') {
    const title = 'This is the list of our students\n';
    countStudents(databaseFile)
      .then((report) => {
        res.end(`${title}${report}`);
      })
      .catch((err) => {
        res.end(err.toString());
      });
    return;
  }
  res.end();
};

const app = http.createServer(requestHandler);

app.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`);
});

module.exports = app;
