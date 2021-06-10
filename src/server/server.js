const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const apiRouter = require('./routes/api');
// const bodyParser = require('body-parser');
const passport = require('passport');
require('./passport');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/api', apiRouter);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
  })
);

//passport configuration - initialize to initialize Passport, session for persistent login sessions
app.use(passport.initialize());
app.use(passport.session());

const userLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

//post request signin
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/employer',
    failureRedirect: '/login',
  }),
  function (req, res, next) {
    console.log('inside passport local authentication');
  }
);

app.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_liteprofile'],
  })
);

//linkedin login
app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: 'http://localhost:8080/employeeProfile',
    failureRedirect: '/auth/error',
  })
  // function (req, res, next) {
  //   // return res.status(200).json({});
  //   res.redirect('http://localhost:8080/employeeProfile');
  // }
);

app.get('/employeeProfile', (req, res) => {
  console.log('res.req.user on server side', res.req.user);
  return res.status(200).json({ profile_id: res.req.user });
});
//   res.sendFile(path.join(__dirname, '../../index.html')); // app.get('/employeeProfile', (req, res) => {
// });

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:8080/employeeProfile',
    failureRedirect: '/auth/error',
  })
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: `An error occurred: ${err}` },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.listen(PORT, () => {
  console.log(`Servin' it up on ${PORT}`);
});

module.exports = app;
