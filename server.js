//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT1=7000;
var PORT2=7050;

//We need a function which handles requests and send response
function handleRequest1(request, response){
    response.end('You are awesome~ ' + request.url);
}
//We need a function which handles requests and send response
function handleRequest2(request, response){
    response.end('You suck~ ' + request.url);
}

//Create a server
var server1 = http.createServer(handleRequest1);
//Create a server
var server2 = http.createServer(handleRequest2);

//Lets start our server
server1.listen(PORT1, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});