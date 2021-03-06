var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger/swagger.json');
const cors = require('cors');

var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var eventRouter = require('./routes/events');
var authRouter = require('./routes/auth');
var adminRouter = require('./routes/administrator');
var requestRouter = require('./routes/pedidos');
var localRouter = require('./routes/local');
var bilheteRouter = require('./routes/bilhete');

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://admin:admin123@cluster0.wgdbt.mongodb.net/paw_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log(' connected to DB!'))
  .catch((error)=> console.log(' error connecting to DB!',error))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/register', registerRouter);
app.use('/api/v1/event', eventRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/adminsaywhat', adminRouter);
app.use('/api/v1/requests', requestRouter)
app.use('/api/v1/local', localRouter);
app.use('/api/v1/bilhete', bilheteRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
