var http = require('http');
var url = require('url');
var exec = require('child_process').exec;
var handles = {};

handles['/'] = start;
handles['/start'] = start;
handles['/upload'] = upload;

function route(handle, path, res) {
    if(typeof handle[path] ==='function'){
        handle[path](res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('not found');
        res.end();
    }
}
function start(response) {
    console.log('request start was called \n');
    exec('ls -ah', function (err, stdout, stderr) {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.write(stdout);
        response.end();
    })
}
function upload(response) {
    console.log('request upload was called \n');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello upload');
    response.end();
}

http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    route(handles,path, res);
}).listen(3000);