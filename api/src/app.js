const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();
const { GITHUB_ID, GITHUB_SECRET, SECRET } = process.env;
const Users = require('./models/User');

const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//session github
//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(methodOverride());
app.use(express.urlencoded({ extended: true }));
//
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//session github
app.use(
  session({
    secret: SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  cb(null, id);
});

//GitHub auth
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_ID || '71a0190eb439aa4438fd',
      clientSecret: GITHUB_SECRET || '5c851b90a23bf0774ae5f1ecc3451f4c63fac20c',
      callbackURL: 'http://localhost:3001/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
  )
);

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('http://localhost:3000/');
});

// Github routes
app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  async function (req, res) {
    req.session.userId = req.user.id;

    res.redirect(`http://localhost:3000/profile/${req.user.username}`);
  }
);

//Routes signup, signin
app.use(router);

module.exports = app;
