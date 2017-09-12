var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('../config/keys');
var mongoose = require('mongoose');

var User = mongoose.model('users');

passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: 'http://localhost:3001/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile', profile);
      
      User.findOne({ googleId: profile.id })
        .then((existingUser)=>{
          if (existingUser) {
            console.log('we already have a record with this profile id');
            done(null, existingUser);
          } else {
            new User({googleId: profile.id})
              .save()
              .then(user => done(null, user))
              console.log('a new user added to DB');
          }
        })
    }
  )
);

