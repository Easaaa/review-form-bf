const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const Reviewer = require('./models/reviewer');
const mongoose = require('mongoose');
const session = require('express-session');

// Require routes
const indexRouter = require('./routes/index');
const collectionsRouter = require('./routes/collections');

const app = express();

// Connect to the database
mongoose.connect('mongodb://localhost:27017/review-form-bf', {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure passport and session
app.use(session({
  secret: 'road to one million',
  resave: false,
  saveUninitialized: true
}));
passport.use(Reviewer.createStrategy());
passport.serializeUser(Reviewer.serializeUser());
passport.deserializeUser(Reviewer.deserializeUser());

// Mount routes
app.use('/', indexRouter);
app.use('/collections', collectionsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;