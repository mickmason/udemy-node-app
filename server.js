var http = require('http');
var fs = require('fs');
http.createServer(function(req, resp) {
	fs.readFile('index.html', function(err, data) {
		if (err) resp.end("There was an error.") ;
		resp.writeHead(200, {
			'Content-type': 'text/html'
		});
		resp.end(data) ;
	}) ;
}).listen(1337, '127.0.0.1') ;
console.log("Server started");