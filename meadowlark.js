var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Meadowlark Travel');
})

app.get('/about', function(req, res) {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
})


app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.listen(app.get('port'), function() {
  console.log('Express is working!', app.get('port'));
});
