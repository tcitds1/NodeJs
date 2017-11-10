var fs = require('fs');
var http = require('http');
http.createServer(function (req,res) {
    if(req.method=='GET'&&req.url.substr(0,7)=='/images'&&req.url.substr(-4)=='.jpg'){
        fs.stat(__dirname+req.url,function (err, stat) {
            if(err||!stat.isFile()){
                res.writeHead(404);
                res.end('not found');
            }
            serve(__dirname+req.url,'application/jpg')
        })
    }
    else if(req.method=='GET'&&req.url=='/'){
        serve(__dirname+'/index.html','text/html');
    }
    else {
        res.writeHead('404');
        res.end('not found');
    }
    function serve(path, type) {
        res.writeHead(200,{'Content-Type':type});
        fs.createReadStream(path).pipe(res);
    }
    // fs.createReadStream(path).on('data',function (data) {
    //     res.write(data);
    // })
    // .on('end',function () {
    //     res.end();
    // })
}).listen(3000);
