var express = require('express');
var app = express();

app.use(function (req, res, next){
  res.write('before ');
  next();
});

app.use(function (req, res, next){
  res.write('more ');
  next();
});

//app. method ( url_pattern , optional_functions , request_handler_function );
app.get('/', function (req, res){
res.end('hello world');
});
app.post('/hi', function (req, res){
res.end('hello world');
});
app.all('/hello', function (req, res){
res.end('hello world');
});
app.all('/place/:holder/:more', function (req, res){
res.write(req.params.holder);
res.end(req.params.more);
});
app.use('/use', function (req, res){
res.end('use');
});
app.route('/test')
.get(function (req, res, next) {res.end('get');})
.post(function (req, res, next) {res.end('post');});

app.use('/json', function (req, res){
res.json({a:5});
});

app.use('/getinfo', function (req, res){
res.end(req.get('Content-Type'));
});

app.use('*', function (req, res){
res.end('all');
});
app.listen(8080);