//In this program, we read the resource.json file from disk. When all the
//data is read, an anonymous function is called (a.k.a. the "callback") containing the
//arguments er, if any error occured, and data, which is the file data.

var fs = require('fs');
fs.readFile('./resource.json', function(er,data){
	console.log(data);
});