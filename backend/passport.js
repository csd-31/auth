const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const User = require('./db/database')

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:  "http://localhost:4000/auth/google/callback",
    scope:["profile", "email"]
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id, username: profile.displayName }, function (err, user) {
        return cb(err, user);
    });
}
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });