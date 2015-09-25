// THIS IS OUR SHOE COLLECTION APP. HOW MANY SHOES DO YOU HAVE IN YOUR COLLECTION? GET THIS APP TO WORK AND YOU WILL BE ABLE TO KEEP TRACK OF ALL YOUR CRAZY SHOES

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var dbConfig = require('./db/config.js');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');


app.use(require('body-parser').urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/shoes-app');

switch(app.get('env')) {
	case 'development':
		mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options);
		break;
	case 'production':
		mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options);
		break;
		default:
			throw new Error('Unknown execution environment: ' + app.get('env'));
}


var routes = require('./config/routes.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port);