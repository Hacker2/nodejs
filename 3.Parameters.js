var http = require('http');
var url = require('url');

var routes = {
 '/' : (request, response) => {response.end('default')},
 '/json' : (request, response) => {
    response.writeHead(200,{
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify({a:5}));
 },
 '/params' : (request, response, parsed_url) => {
   var q = parsed_url.query;
   response.write(q.a);
   response.end(q.b);
 }
}

var routesPost = {
 '/' : (request, response) => {
   response.writeHead(200,{
     'Content-Type': 'text/plain'
   });
   request.on('data', function (data) {
     response.write('request is ' + data);
   });
   request.on('end', function () {
     response.end();
   });
 },
 '/json' : (request, response) => {
    response.writeHead(200,{
      'Content-Type': 'application/json'
    });
    request.on('data', function (data) {
     var o = JSON.parse(data);
     console.log("you've sent " + o.b);
   });
   request.on('end', function () {
     response.end(JSON.stringify({a:5}));
   });
 }
}

http.createServer((request, response) => {
  console.log(request.method);
  var parsed_url = url.parse(request.url, true);
  var path = parsed_url.pathname;

  if(request.method == 'GET' && path in routes) {
    return routes[path](request, response, parsed_url);
  } else if(request.method == 'POST' && path in routesPost) {
    return routesPost[path](request, response, parsed_url);
  }

  response.writeHead(200,{
    'Content-Type': 'text/plain'
  });
  response.write('hello world');
  response.end();
}).listen(80);