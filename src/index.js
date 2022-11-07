const express = require('express');
const app = express();
const resources = require('./resources');
const file_upload = require('express-fileupload');
const cors = require('cors');
const body_parser = require('body-parser');
const morgan = require('morgan');
const { MongoServerError } = require('mongodb');
const session = require('express-session');
const passport = require('passport');
const passport_local_mongoose = require('passport-local-mongoose');
const connect_ensure_login = require('connect-ensure-login');
const { User } = require('./model');
// const MongoDBStore = require('connect-mongodb-session')(session);
const favicon = require('serve-favicon');
const path = require('path');
const { argv } = process;
const port = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/parkingspotdetector';

// var store = new MongoDBStore({
//   uri: DATABASE_URL,
//   collection: 'sessions'
// });

// store.on('error', function(error) {
//   console.log(error);
// });

const RUN_LOCAL_FLAG = "--run-local";
var runLocal = argv.includes(RUN_LOCAL_FLAG);

// app.use(session({
//   secret: 'This is a secret',
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//   },
//   store: store,
//   // Boilerplate options, see:
//   // * https://www.npmjs.com/package/express-session#resave
//   // * https://www.npmjs.com/package/express-session#saveuninitialized
//   resave: true,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(file_upload({}));
app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({extended: true}));

if (RUN_LOCAL_FLAG) {
  app.use(morgan('dev'));
}

app.use(favicon(path.join(__dirname, "favicon", "psdlogo.png")));

app.use(express.static(path.join(__dirname, "frontend", "build")));

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

if (runLocal) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;
