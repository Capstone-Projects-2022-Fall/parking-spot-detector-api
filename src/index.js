const express = require('express');
const app = express();
const port = 3000;
const resources = require('./resources');
const { MongoServerError } = require('mongodb');
const { argv } = process;

const RUN_LOCAL_FLAG = "--run-local";

var runLocal = false;

if(argv.includes(RUN_LOCAL_FLAG)) {
  runLocal = true;
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

for(var r in resources) {
  new resources[r](app);
}

function mongoErrorHandler (err, req, res, next) {
    res
      .status(500)
      .json({ error: err.message });
}

app.use(mongoErrorHandler);

if(runLocal) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;
