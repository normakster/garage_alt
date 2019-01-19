var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var debug = require('debug')('app');

const staticRouter = require('./routes/staticRoutes');
const garageRouter = require('./routes/garageRoutes');
// const util = require('./controllers/utilController');

// util.connectDB();
// util.setupDB();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/public/css'));//stylesheets
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/webfonts', express.static(__dirname + '/public/fonts/webfonts/'));

app.use('/garage', garageRouter);
// app.use('/about', staticRouter);
// app.get('/login', _Router);
// app.get('/auth', _Router);
// app.get('/signup', _Router);
app.use('/', staticRouter);


// app.use('/projects', projectRouter); // Project List
// app.get('/projects/:project', _Router); // Project Profile
// app.get('/project/add', _Router);
// app.post('/project/add', _Router);
// app.get('/project/edit/:id', _Router);
// app.post('/project/edit/:id', _Router);
// app.get('/:project/git', _Router); // Project git

// catch favicon requests and respond
app.use('/favicon.ico', (req, res) => res.status(204));

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
