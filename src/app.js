const express = require('express');
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const axios = require('axios').default;
require('dotenv').config();

const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//session github
//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//

app.use(
  session({
    secret: process.env.SECRET || 'secret',
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
      clientID: process.env.GITHUB_ID || '71a0190eb439aa4438fd',
      clientSecret:
        process.env.GITHUB_SECRET || '5c851b90a23bf0774ae5f1ecc3451f4c63fac20c',
      callbackURL: 'http://localhost:3001/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      //   User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
      console.log(profile);
      cb(null, profile);
    }
  )
);

//Routes
app.use(router);

// Github routes
app.get('/auth/github', passport.authenticate('github'));
// app.get('login/oauth/authorize', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  // passport.authenticate('github', { failureRedirect: '/login' }),
  async function (req, res) {
    req.session.userId = req.user.id;
    // Successful authentication, redirect home.
    // try {
    //   const userdata = await axios.get(
    //     `https://api.github.com/users/${userdata.login}/repos`
    //   );
    //   if (userdata) return res.status(200).json(userdata);
    //   return res.send({ message: 'inicialize' });
    // } catch (error) {
    //   console.log(error);
    // }

    res.redirect('/');
  }
);

module.exports = app;
//https://github.com/settings/applications/1673892
