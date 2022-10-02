const express = require('express');
const app = express();
const port = 3000;
const resources = require('./resources');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

for(var r in resources) {
  new resources[r](app);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
