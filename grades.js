var http = require('http');
http.createServer(function(req, res) {
	var fs = require('fs');
	var outStream = fs.createWriteStream('feedback.txt');
	outStream.write("Hello\n");
	outStream.close();
	res.end();
}).listen(8080);
