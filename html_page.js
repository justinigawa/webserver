// Requiring dependencies
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 80
var PORT = 80;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var url_parts = url.parse(req.url);
    //When we visit different urls, the switch statement call on different functions.    

    switch (url_parts.pathname) {
        case '/index':
            fs.readFile("index.html", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });


        case '/food':
            fs.readFile("food.html", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

        case '/movies':
            fs.readFile("movies.html", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

        case '/cssFrameworks':
            fs.readFile("cssFrameworks.html", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
    };
}
    // Starts our server.
    server.listen(PORT, function() {
        console.log("Server is listening on PORT: " + PORT);
    });
