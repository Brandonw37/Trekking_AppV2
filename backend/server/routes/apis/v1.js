'use strict';

const registerController = require('../../controllers/apis/register');
const loginController = require('../../controllers/apis/login');
const packerController = require('../../controllers/apis/packer');
const authController = require('../../controllers/apis/Authorization');
const express = require('express');

let router = express.Router();
router.use('/register', registerController);
router.use('/login', loginController);
router.use('/packer', packerController);
router.use('/Auth',authController);

module.exports = router;