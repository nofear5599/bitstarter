var express = require('express');

var app = express.createServer(express.logger());
var fs =  require('fs');

var index = fs.readFileSync('index.html','utf8');
var buf = new Buffer(index,'utf8');
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
