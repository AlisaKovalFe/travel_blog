//подключение (импорты) библиотек
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors')

//импорты роутов
const greetingRouter = require('./routes/greeting');
const aboutRouter = require('./routes/about');
const videosRouter = require('./routes/videos');
const destinationsRouter = require('./routes/destinations');
const helpersRouter = require('./routes/helpers');
const photoGalleryRouter = require('./routes/photoGallery');
const countriesForSelectRouter = require('./routes/countiesForSelect')

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || '4000';

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//urls
app.use('/', greetingRouter);
app.use('/about', aboutRouter);
app.use('/video', videosRouter);
app.use('/destinations', destinationsRouter);
app.use('/helpers', helpersRouter);
app.use('/photoGallery', photoGalleryRouter);
app.use('/countiesForSelect', countriesForSelectRouter);

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

server.listen(port, () => {
  console.log('Server has been started on port', port);
});


