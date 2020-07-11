'use strict';

const express = require('express');
const model = require('../../models/GoogleUser');
const User = require('../../models/User');

function cookieAuth (req, res, next) {
    const token = req.cookies.googleToken || '';
    try {
        if (!token) {
            return res.status(401).json('Login Please');
        } 
        let verifToken = model.googledb.findOne({
            accessToken: token
        })
        console.log(verifToken)
        if (verifToken.accessToken === token) {
            return true
        } return false
        next();
    } catch(err) {
        return res.status(500).json(err.toString());
    }
}

module.exports = { cookieAuth: cookieAuth };