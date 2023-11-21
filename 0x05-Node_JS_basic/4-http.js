/**
 * Creates an HTTP server that listens on a specified hostname and port.
 *
 * @module http
 * @requires http
 * @exports app
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

/**
 * Callback function that handles incoming requests and sends a response.
 *
 * @callback requestCallback
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */

/**
 * Creates an HTTP server using the provided callback function.
 *
 * @param {requestCallback} callback - The callback function to handle incoming requests.
 * @returns {Object} - The created HTTP server.
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

/**
 * Starts the HTTP server and listens for incoming requests.
 *
 * @param {number} port - The port number to listen on.
 * @param {string} hostname - The hostname to listen on.
 * @param {Function} callback - The callback function to execute when the server starts listening.
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
