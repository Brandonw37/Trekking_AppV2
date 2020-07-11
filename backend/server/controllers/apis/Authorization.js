'use strict';

const express = require('express');
const Auth = require('../../services/Authorization/Authorization');
const passport = require('passport');
const session = require('express-session');

let router = express();

router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/Login' }),
  function (req, res) {
    //    console.log('redirected', req.user)
    let aToken = req.user.accessToken
    req.session.accessToken = aToken
    req.session.save(() => {
      // Successful authentication, redirect home.
      res.redirect('http://localhost:3000/');
    }); //console.log(req.session)
  });

router.get('/success', (req, res, err) => {
  console.log(req.session)
    if (req.session.passport.user) {
      res.json({
        success: true,
        message: 'User has successfully authenticated',
        user: req.user,
        cookies: req.session
      });
    } else {
      res.json({
        success: false,
        message: err()+'User not authenticated'
      }) 
    }
});

module.exports = router;