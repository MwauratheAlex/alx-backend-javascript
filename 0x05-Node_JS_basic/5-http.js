const http = require('http');
const port = 1245;
const hostname = 'localhost';
const databaseFile = (process.argv.length) > 2 ? process.argv[2] : '';
const countStudents = require('./3-read_file_async');

const requestHandler = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const url = req.url;

    if (url === '/') {
        res.end('Hello Holberton School!');
        return;
    } else if (url === '/students') {
        const resData = 'This is the list of our students\n';
        countStudents(databaseFile)
          .then((report) => {
            console.log(report);
            res.end(resData);
            return;
          })
        return;
    }
    res.end();
}

const app = http.createServer(requestHandler);

app.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`);
});

module.exports = app;
