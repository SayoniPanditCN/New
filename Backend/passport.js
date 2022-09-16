const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "809358394075-pmbbfmhph2dp36v84rvj0t667olvkp6p.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile)
  }
));

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})