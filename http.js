var http = require('http');
//for (key in http.STATUS_CODES) {console.log('STATUS_CODES['+key+']=='+http.STATUS_CODES[key]);}
// create http server
console.log('http server runnig on port:8000');
var server = http.createServer(function (req, res) {
  res.statusCode = 418;
//  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("I'm a teapot");
});
server.listen(8000);
