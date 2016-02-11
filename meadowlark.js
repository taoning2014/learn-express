var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({
  defaultLayout: 'main'
});
var fortuneCookie = require('./lib/fortune');

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function(req, res, next) {
  res.locals.showTests = (req.query.test == 1);
  next();
})

app.use(express.static(__dirname + '/public'));

app.get('/home', function(req, res) {
  console.log('res.locals.showTests');
  console.log(res.locals.showTests);
  res.render('home');
})

app.get('/about', function(req, res) {
  res.render('about', {
    fortune: fortuneCookie.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  });
})

app.get('/tours/hood-river', function(req, res) {
  res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
  res.render('tours/request-group-rate');
});


app.use(function(req, res) {
  res.render('404');
});

app.listen(app.get('port'), function() {
  console.log('Express is working!', app.get('port'));
});
