var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var db = require('../db/config');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    db('users').where({ id }).first()
          .then((user) => { done(null, user); })
          .catch((err) => { done(err, null); });
    });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  }, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        
      db('users').where({'id': profile.id})
              .limit(1)
              .then(function(user, err) {
                if (!user) {
                  done(err, null);
                } else if (user) {
                  return done(null, user);
                } else {
                  var names = profile.name.givenName + ' ' + profile.name.familyName;
                  db('users').insert({
                    id: profile.id,
                    token: accessToken,
                    email: profile.emails[0].value,
                    name: names
                  }).then( function(data, err) {
                    if (err) {
                      console.log(err);
                      throw err;
                    } else {
                      return done(null, null);
                    }
                  });
                }
              });
    });
  }

  ));


};