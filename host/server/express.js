var cookieParser = require('cookie-parser');
var express = require('express');

module.exports = function (app) {


    app.use(cookieParser());

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(express.json());
    app.use(function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header("Cache-Control", "no-cache");
        next();
    });

    // preflight for cors
    app.options("/*", function (req, res, next) {
        // res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.sendStatus(200);
    });

};

