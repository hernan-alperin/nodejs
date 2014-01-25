var http = require('http');
var url = require('url');
var options = url.parse('http://google.com');

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on("data", function(chunk) {
    console.log("BODY: " + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
