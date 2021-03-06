require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//mogoose setup
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully')
})
//If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
})

var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/client/build/"));

app.use('/users', usersRouter);

app.get("/", (req, res) => {
    console.log('HEY THERE')
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
