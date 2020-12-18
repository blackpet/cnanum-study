//Load HTTP module
var http = require("http");
var fs = require('fs');

//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {
    setHeaderHtml(response);
    // http method 제어
    // if(request.method !== 'GET') {
    //     response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    //     response.end("권한이 없습니다.");
    //     return;
    // }


    // page url 제어
    switch(request.url) {
        case '/about':
            response.end("<h1>나에 대하여 알고 싶은가?</h1>");
        case '/contact-us':
            var url = '/post.html';
            response.end(fs.readFileSync(__dirname + url));
        case '/api/json-data':
            if(request.method !== 'POST') {
                response.writeHead(403, {'Content-Type': 'text/plain; charset=UTF-8'});
                response.end("권한이 없습니다.");
                return;
            }
            // Set the response HTTP header with HTTP status and Content type
            response.writeHead(201, {'Content-Type': 'application/json; charset=UTF-8'});
            // Send the response body "Hello World"
            response.end('{"key1":1, "key2":"abc"}');
        case '/':
            response.end("<h1>welcome cnanum study!</h1>");
        default:
            response.writeHead(404);
            response.end();
    }

}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')


function setHeaderHtml(res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
}