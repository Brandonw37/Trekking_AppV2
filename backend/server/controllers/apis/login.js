'use strict';

const express = require('express');
const loginService = require('../../services/authentication/login');
const passport = require('passport');

let router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session)
  res.json(req.session)
});

router.post('/', loginService.loginUser)

router.get('/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.profile.emails.read',
  'profile',
  'email' ]
}));

module.exports = router;