var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {

  var parsedUrl = url.parse(request.url);

  if (request.method == 'GET' && parsedUrl.path == '/listings') {
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write(JSON.stringify(listingData));
    response.end();
  }
  else {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Bad gateway error");
    response.end();
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {

  if (err) {
    throw err;
  }

  listingData = JSON.parse(data);
});

var server = http.createServer(requestHandler);
server.listen(port, function() {
  console.log('Server listening on: http://127.0.0.1:' + port);
});