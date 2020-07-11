let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let db = require('../server/models/GoogleUser');
let db2 = require('../server/models/User');
let config = require('./db');
let passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { response } = require('express');
const { request } = require('../server/controllers/apis/Authorization');
const dotenv = require('dotenv').config();
const clientid = process.env.CLIENTID;
const clientsec = process.env.CLIENTSECRET;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.googledb.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error('Failed to deserialize a User'));
    });
});

passport.use(new GoogleStrategy({
  clientID: clientid,
  clientSecret: clientsec,
  callbackURL: "http://localhost:8080/api/v1/auth/google/callback",
  passReqToCallback: true
},
  function (req, accessToken, refreshToken, profile, email, done) {
//    console.log(profile)
//    console.log(email)
    db.googledb.findOrCreate({ 
      providerUserId: email.id,
//      accessToken: profile.access_token,
      name: email.displayName,
      email: email._json.email,
      provider: email.provider,
      google: profile._json
     }, 
     function (err, user) {
      return done(err, user);
    })
  }
));

function setPassortConfigs(passport) {
  let opts = {};

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    db2.User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};

module.exports = setPassortConfigs