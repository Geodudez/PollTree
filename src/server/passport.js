require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const LinkedinStrategy = require("passport-linkedin").Strategy;
// const db = require()

//linkedin strategy
passport.use(
  new LinkedinStrategy(
    {
      consumerKey: process.env.LINKEDIN_CLIENT_ID,
      consumerSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: process.env.LINKEDIN_CALLBACK_URl,
    },
    function (token, tokenSecret, profile, done) {
      User.findOrCreate({ linkedinID: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

//local strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (req, username, password, done) => {
      log.debug("Login process: ", username);
      return db
        .one(
          `SELECT user_id, user_name, user_email, user_role
        FROM users
        WHERE user_email=$1 AND user_pass=$2`,
          [username, password]
        )
        .then((result) => {
          return done(null, result);
        })
        .catch((err) => {
          log.error("/login: " + err);
          return done(null, false, { message: "Wrong user name or password" });
        });
    }
  )
);

passport.serializeUser((user, done) => {
  log.debug("serialize ", user);
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  log.debug("deserualize ", id);
  db.one(
    `SELECT user_id, user_name, user_email, user_role FROM users 
            WHERE user_id = $1`,
    [id]
  )
    .then((user) => {
      //log.debug("deserializeUser ", user);
      done(null, user);
    })
    .catch((err) => {
      done(new Error(`User with the id ${id} does not exist`));
    });
});
