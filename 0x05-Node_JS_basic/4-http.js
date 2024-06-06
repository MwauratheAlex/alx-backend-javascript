const { createServer } = require('http');

const port = 1245;
const app = createServer((_, res) => {
  res.end('Hello Holberton School!');
});
app.listen(port);

module.exports = app;
