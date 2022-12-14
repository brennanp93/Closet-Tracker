var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: './closet',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout(function () {
    // Change path for your "landing" page
    res.redirect('/');
  });
});

module.exports = router;
