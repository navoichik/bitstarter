var express = require('express');
var fr= fs.readFile(index.html);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
