require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LinkedinStrategy = require('passport-linkedin').Strategy;

//linkedin strategy
passport.use(new LinkedinStrategy({
    consumerKey: process.env.LINKEDIN_CLIENT_ID,
    consumerSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.LINKEDIN_CALLBACK_URl
},
    function (token, tokenSecret, profile, done) {
        User.findOrCreate({ linkedinID: profile.id }, function (err, user) {
            return done(err, user)
        });
    }
));

/*
//local strategy
// passport.use(new LocalStrategy({usernameField:"email", pwField:"password"},(email, password, callback) => {
  console.log('in passport local strategy')
  db.query('SELECT user_id, email, password FROM accounts WHERE email=$1', [email], (err, result) => {
    if(err) {
      return cb(err)
    }

    if(result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, function(err, res) {
        if(res) {
          console.log(first)
          return callback(null, { id: first.user_id, email: first.email })
         } else {
          callback(null, false)
         }
       })
     } else {
       callback(null, false)
     }
  })
}))

*/