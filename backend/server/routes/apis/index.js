'use strict';

const express = require('express');
const v1ApiController = require('./v1');
const configs = require('../../../configs/db')
const redis = require('redis');
const session = require('express-session');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

let router = express.Router();

var sessionMiddleware = session({
    store: new RedisStore({ client: redisClient }),
    secret: configs.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 6000000, httpOnly: false },
});

router.use('/v1', sessionMiddleware, v1ApiController);

module.exports = router;