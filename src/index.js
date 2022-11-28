const express = require('express'); // :-) 
const app = express();

const resources = require('./resources');
const file_upload = require('express-fileupload');
const cors = require('cors');

const body_parser = require('body-parser'); // :-) 

const morgan = require('morgan');
const { MongoServerError } = require('mongodb');

const session = require('express-session');
const passport = require('passport');  // :-) 
const passport_local_mongoose = require('passport-local-mongoose'); // :-) 
const connect_ensure_login = require('connect-ensure-login');
const { User } = require('./model'); // :-) 

const MongoDBStore = require('connect-mongodb-session')(session);

const favicon = require('serve-favicon');
const path = require('path');
const { argv } = process;
const port = process.env.PORT || 8080;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/parkingspotdetector';

const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
//const localStrategy = require('passport-local').Strategy; // :-) 
const LocalStrategy = require("passport-local");

const axios = require('axios');

// connect to mongoDB collections
var store = new MongoDBStore({
  uri: DATABASE_URL,
  collection: 'sessions'
});

store.on('error', function(error) {
  console.log(error);
});

const RUN_LOCAL_FLAG = "--run-local";
var runLocal = argv.includes(RUN_LOCAL_FLAG);

app.use(body_parser.urlencoded({extended: true}));
app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: false,
  saveUninitialized: false
}));

//app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*passport.use( new localStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password_hash, (err, result) => {
      if (err) throw err;
      return done(null, (result === true) ? user : false);
    })
  });
}));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id}, (err, user) => {
    const userInfo = {
      username: user.username,
    };
    cb(err, userInfo);
  });
});*/

app.use(file_upload({}));
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:3000',
  credentials: true
}));

if (RUN_LOCAL_FLAG) {
  app.use(morgan('dev'));
}

app.use(favicon(path.join(__dirname, "favicon", "psdlogo.png")));

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get('/', connect_ensure_login.ensureLoggedIn(), (req, res) => {
  res.send('Hello World!');
});

// routes
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.send('User does not exist');
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send('Successfully authenticated');
        console.log('PEN:', req.user);
      });
    }
  })(req, res, next);
});

const userURL = 'http://127.0.0.1:8080/user';

app.post('/register', (req, res) => {
  const temp = User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.send("User already exists");
    } else {
      const hashPass = await bcrypt.hash(req.body.password_hash, 10);
      const newUser = new User({
        username: req.body.username,
        password_hash: hashPass,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        handicap: req.body.handicap,
        register_camera: req.body.register_camera
      });
      await newUser.save();
      res.send("User created");

      axios({
        method: 'GET',
        withCredentials: true,
        url: userURL
      })
        .then((res) => {
          console.log('COOKIE SUCCESS:', res.data);
        })
        .catch(err => console.error(err));
    };
  });

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
