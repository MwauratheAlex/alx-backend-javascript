const http = require('node:http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`);
});

module.exports = app;
