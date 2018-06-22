rquire('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.nv.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
})
//If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
