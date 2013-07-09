var express = require('express');

var app = express.createServer(express.logger());
var fs =  require('fs');

var index = fs.readFile('index.html');
var buf = new Buffer(index);
app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
