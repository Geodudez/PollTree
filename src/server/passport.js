require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
const db = require('./models/models');

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(async function (obj, cb) {
  console.log('deserialize user id', obj.id);
  const params = [obj.id];
  const queryString = `SELECT * FROM employees WHERE profile_id=$1`;
  const result = await db.query(queryString, params);
  const profile_id = result.rows[0].profile_id;
  cb(null, profile_id);
});

//linkedin strategy
passport.use(
  new LinkedinStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK_URl,
      scope: process.env.LINKEDIN_SCOPE,
    },
    function (accessToken, refreshToken, profile, done) {
      // const token = accessToken;
      const profileID = profile.id;
      const params = [profileID];
      console.log('profileID: ', profileID);
      const queryString = `INSERT INTO employees (profile_ID) VALUES ($1) ON CONFLICT DO NOTHING`;
      db.query(queryString, params, (err, res) => {
        console.log('in linkedin/db query');
        if (err) {
          console.log('error in linked employees table', err);
        } else {
          console.log('success in linkedin/db query!');
        }
        return done(null, profile);
      });
    }
  )
);

//local strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (req, username, password, done) => {
      log.debug('Login process: ', username);
      return db
        .query(
          `SELECT user_id, user_name, user_email, user_role
        FROM employers
        WHERE user_email=$1 AND user_pass=$2`,
          [username, password]
        )
        .then((result) => {
          return done(null, result);
        })
        .catch((err) => {
          log.error('/login: ' + err);
          return done(null, false, { message: 'Wrong user name or password' });
        });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      const profileID = profile._json.sub;
      const params = [profileID];
      console.log('profileID: ', profileID);
      const queryString = `INSERT INTO employees (profile_ID) VALUES ($1) ON CONFLICT DO NOTHING`;
      db.query(queryString, params, (err, res) => {
        console.log('in google/db query');
        if (err) {
          console.log('error in google employees table', err);
        } else {
          console.log('success in google/db query!');
        }
        return done(null, profile);
      });
    }
  )
);
