var http = require('http');
var url = require('url');
http.createServer( function(req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 var newPostFormRegex = new RegExp('^/posts/new/?$');
 var pathname = url.parse(req.url).pathname;

 console.log(pathname);
 res.end('Hello World \n');
	}).listen(8124,"127.0.0.1");
console.log('http://127.0.0.1:8124')