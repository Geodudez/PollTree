require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const bcrypt = require('bcrypt');
// const db = require()

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
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
      User.findOrCreate({ linkedinID: profile.id }, function (err, user) {
        if (err) {
          return done(err, user);
        }
        if (!user) {
          user = new User({
            user_id: profile.user_id,
            access_token: profile.accessToken,
          });
        }
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
        .one(
          `SELECT user_id, user_name, user_email, user_role
        FROM employers
        WHERE user_email=$1 AND user_pass=$2`,
          [username, password]
        )
        .then(result => {
          return done(null, result);
        })
        .catch(err => {
          log.error('/login: ' + err);
          return done(null, false, { message: 'Wrong user name or password' });
        });
    }
  )
);

// passport.serializeUser((user, done) => {
//   log.debug('serialize ', user);
//   done(null, user.user_id);
// });

// passport.deserializeUser((id, done) => {
//   log.debug('deserualize ', id);
//   db.one(
//     `SELECT user_id, user_name, user_email, user_role FROM users
//             WHERE user_id = $1`,
//     [id]
//   )
//     .then(user => {
//       //log.debug("deserializeUser ", user);
//       done(null, user);
//     })
//     .catch(err => {
//       done(new Error(`User with the id ${id} does not exist`));
//     });
// });
