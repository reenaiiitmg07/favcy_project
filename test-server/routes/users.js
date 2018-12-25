const jwt = require('jwt-simple');
var express = require('express');
var router = express.Router();
var User =require('../model/user');
const config = require('../config');
const passport = require('passport');
const passportService = require('../services/passport');


const requireSignin = passport.authenticate('local', { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

router.post('/signin',requireSignin, function(req, res, next) {

   res.send({ token: tokenForUser(req.user) });

});
router.post('/signup', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }
      res.json({ token: tokenForUser(user) });
    });
});
});
module.exports = router;
