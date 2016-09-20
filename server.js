//lets require/import the http module
var http = require('http');

//lets define a port we want to listen to
var PORT = 7000;
var PORT2 = 7500;

//We need a function which handles requests and send response
function handleRequest(request, response){
	response.end('It Works!! Path Hit: ' + request.url);
}

//create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
	//callback triggered with server is successfully listening, Hurray!
	console.log("Server listening on: http://localhose:%s", PORT);
	console.log("You're Awesome!");
});

server.listen(PORT2, function(){
	//callback triggered with server is successfully listening, Hurray!
	console.log("Server listening on: http://localhose:%s", PORT2);
	console.log("You suck!");
});