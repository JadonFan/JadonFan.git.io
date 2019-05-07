const http = require('http');
http.createServer(function(req, res) {
	const fs = require('fs');
	var outStream = fs.createWriteStream('feedback.txt');
	outStream.write("Hello\n"); // will create a file on the server with the necessary database values 
	outStream.close();
	res.end();
}).listen(process.env.PORT || 8080);
