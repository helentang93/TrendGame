var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var db = require('./config');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    db('users').where({ id }, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },

    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        
        db('users').where({ id: profile.id })
              .limit(1)
              .then(function(user) {
                if (!user) {
                  done(user, null);
                } else if (user) {
                  return done(null, user);
                } else {
                  db('users').insert({
                    id: profile.id,
                    token: accessToken,
                    email: profile.emails[0].value,
                    name: profile.name.givenName + ' ' + profile.name.familyName
                  }).then( function() {
                    console.log(profile);
                  });
                }
              });
      });
    }

  ));


};