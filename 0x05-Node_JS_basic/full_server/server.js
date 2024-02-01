const express = require('express');
const mapRoutes = require('./routes/index');

const port = 1245;
const app = express();
mapRoutes(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

module.exports = app;
