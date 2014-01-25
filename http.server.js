var http = require('http');
var HowLong = 30;
// create http server
console.log('http server runing on port:8000 for just '+HowLong+' seconds');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('I am here for just '+HowLong+' seconds');
});
server.listen(8000);
setTimeout(function () {server.close();}, HowLong*1000);

