require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const {connectDB} = require("./config/db");
const placeRoutes = require("./routes/places");
const landmarksRoutes = require("./routes/landmarks");

var app = express();

connectDB()

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/locloc/places', placeRoutes)
app.use('/locloc/landmarks', landmarksRoutes)

module.exports = app;
