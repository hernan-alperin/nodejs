var http = require('http');
for (key in http.STATUS_CODES) {console.log('STATUS_CODES['+key+']=='+http.STATUS_CODES[key]);}
// create http server
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});
server.listen(8000);
setTimeout(server.close(),5000);
