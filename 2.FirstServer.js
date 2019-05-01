var http = require('http');

var routes = {
 '/' : (request, response) => {response.write('default')},
 '/hello' : (request, response) => {response.write('hi')},
}

http.createServer((request, response) => {
  response.writeHead(200,{
    'Content-Type': 'text/plain'
  })
  if(request.url in routes) {
    routes[request.url](request, response);
  } else {
    response.write('hello world');
  }
  var l = 'asdf'.lengthh;

  /*if(request.url == '/') {
    response.write('default');
  } else if(request.url == '/hello') {
    response.write('hi');
  } else {
    response.write('hello world');
  }*/
  response.end();
}).listen(80);