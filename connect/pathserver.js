var http = require('http');
var url = require('url');
function start(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname +' received.');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('hello world');
    res.end();
}
http.createServer(start).listen(3000);