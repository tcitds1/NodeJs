var fs = require('fs');

var handle = {};
handle['/'] = start;
handle['/start'] = start;
handle['/upload'] = upload;
handle['/show'] = show;
function start(res,data) {
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    res.writeHead(200, {"Content-Type": "text/html"});

    res.write(body);
    res.end();
}
function upload(res,data) {
    console.log('received data ' + data);
    res.writeHead('200', {'Content-Type':'text/plain'});
    res.write('uploading success');
    res.end();
}
function show(res, data) {
    fs.readFile('./test.jpg','binary',function (err, file) {
        if(err) {
            res.writeHead('500',{'Content-Type':'text/plain'});
            res.write(err+'\n');
            res.end();
        }
        else {
            res.writeHead('200', {'Content-Type':'image/png'});
            res.write(file,'binary');
            res.end();
        }
    })
}
module.exports = handle;