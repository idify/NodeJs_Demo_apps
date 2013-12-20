//Piping from a readable stream to a writeable stream.
//The data is read in from the file (fs.createReadStream)
//and being sent out (.pipe) to the client (res) as it comes in. The event loop is
//able to handle other events while data is being streamed.


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('./image.png').pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');
