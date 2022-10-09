const express = require('express');
const app = express();
const port = 3000;
const resources = require('./resources');
const { MongoServerError } = require('mongodb');
const favicon = require('serve-favicon');
const path = require('path');

app.use(express.json());

app.use(favicon(path.join(__dirname, "favicon", "psdlogo.png")));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

for (var r in resources) {
  new resources[r](app);
}

function mongoErrorHandler (err, req, res, next) {
    res
      .status(500)
      .json({ error: err.message });
}

app.use(mongoErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
