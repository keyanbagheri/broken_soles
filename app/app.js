// THIS IS OUR SHOE COLLECTION APP. HOW MANY SHOES DO YOU HAVE IN YOUR COLLECTION? GET THIS APP TO WORK AND YOU WILL BE ABLE TO KEEP TRACK OF ALL YOUR CRAZY SHOES

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var dbConfig = require('./db/config.js');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoes-app');

var routes = require('./config/routes.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db/seed.js').seedShoes();

app.use(routes);

app.listen(port);
console.log('server started on ' + port);
