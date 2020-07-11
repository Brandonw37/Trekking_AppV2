//server file

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const session = require('express-session');
const redis = require('redis');
const path = require('path');
const dotenv = require('dotenv').config();
const configs = require('../configs/db');
const { request } = require('express');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

module.exports = function () {
    let server = express(),
        create,
        start;

    create = function (config, db) {
        let routes = require('./routes');

        let sessionMiddleware = session({
            store: new RedisStore({ client: redisClient }),
            secret: configs.secret,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false, maxAge: 6000000, httpOnly: false },
        });

        //server settings
        server.set('env', config.env);
        server.set('port', 8080);
        server.set('hostname', config.hostname);
        server.set('trust proxy', 1 );

        //return middleware that parses json
        server.use(express.static(path.join(__dirname, 'build')));
        server.use(cors({credentials: true, origin: 'http://localhost:3000'}));
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(cookieParser(configs.secret));
        server.use(logger('dev'));
        server.use(passport.initialize());
        server.use(passport.session());
        server.use(sessionMiddleware);
        require('../configs/passport')(passport);
        /*server.use(cookieSession({
            name: 'session',
            keys: ['key1', 'key2']
        }))*/

        mongoose.connect(db.database, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        
        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-   Type, Accept, Authorization");
            next();
        })

        //set up routes
        routes.init(server);
    };

    start = function () {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listeing on -http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};
