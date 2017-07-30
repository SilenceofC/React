var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var home = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  keys:['aa','bb','cc'],
}));

app.use(cors({
  origin:['http://localhost:8001','http://localhost:8080'],
  methods:['GET','POST',''],
  alloweHeaders:['Content-Type','Authorization']
}));


app.use('/', index);
app.use('/home',home);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('米有找到');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.all('*', function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.setHeader("Access-Control-Allow-Credentials",true); //带cookies
//
//   res.setHeader("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// app.all('*',function (req, res ) {
//
//   res.header("Access-Control-Allow-Credentials",true); //带cookies
//
// });
module.exports = app;
