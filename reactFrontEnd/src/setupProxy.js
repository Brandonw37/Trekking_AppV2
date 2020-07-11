const { createProxyMiddleware} = require('http-proxy-middleware');
const express = require('express');

const app = express();

module.exports = function (app) {
    app.use(
        'api/v1/Login/google',
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
    app.use(
        '/api/*',
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
};