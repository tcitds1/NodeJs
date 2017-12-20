
var http = require('http');
var url = require('url');
var querying = require('querystring');

var route = require('./router.js'); //不加斜杠 会从默认的module路径去寻找
var handles = require('./requestHandle');


http.createServer(function (req, res) {
    var postdata = '';
    var pathname = url.parse(req.url).pathname;

    req.addListener('data',function (chunk) {
        postdata += chunk;
    })
    req.addListener('end',function () {
        route(handles,pathname,res,postdata);
    })


}).listen(3000);