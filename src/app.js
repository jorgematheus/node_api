'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const indexRoute = require('../src/routes/index-route');
const productRoute = require('../src/routes/product-route');


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;