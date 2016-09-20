var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

var goodPhrases = ['You are sooo good looking!', 'Boy are you smart!', 'I wish I were as cool as you!'];
var badPhrases = ['You need a new face!', 'Dumb people call you dumb!', 'If you were the last person on earth, you still would not be one of the cool ones!'];
var good = goodPhrases[Math.floor(Math.random()*goodPhrases.length)];
var bad = badPhrases[Math.floor(Math.random()*goodPhrases.length)];


function handleRequest1(request, response){
	response.end(good);
};

function handleRequest2(request, response){
	response.end(bad);
};

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
});