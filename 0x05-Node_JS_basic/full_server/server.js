const express = require('express');
const router = require('./routes');

const port = 1245;
const app = express();
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = app;
