const express = require('express');
const app = express();
const port = 3000;
const resources = require('./resources');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

prisma.$connect().then(() => {
  prisma.user.findMany().then((res) => {
    console.log(res);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

for(var r in resources) {
  new resources[r](app);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
