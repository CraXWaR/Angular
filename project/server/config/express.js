const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parse');
const cookieSecret = process.env.COOKIESECRET || 'project';

module.exports = (app) => {
    app.use(express.json());

    app.use(cookieParser(cookieSecret));

    app.use(express.static(path.resolve(__basedir, 'static')));
};