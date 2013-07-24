
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

// console.log(textstring);

app.get('/', function(request, response) {
//  var buffer = fs.readFileSync('index.html'); 
//  var textstring = buffer.toString('utf8');
  var textstring = fs.readFileSync('index.html','utf8'); 
  response.send(textstring);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

