var connect = require('connect'),
    http = require('http');
var app = connect()
    .use(access)
    .use(test);

function access(req, res ,next) {
    var hour = new Date().getHours();
    if(hour<11 || hour>17) {
        res.writeHead(503, {'Content-Type': 'text/plain;charset=utf8'});
        res.end('下午1点到5点之外的时间禁止访问');
    }
    else {
        next();
    }
}
function test(req, res) {
    res.writeHead('200', {'Content-Type':'text/plain'});
    res.end('this is a test page');
}

http.Server(app).listen(3000);