require('http').request({
    host: '127.0.0.1',
    port: 3000,
    url: '/',
    method: 'GET'
},function (res) {
    res.setEncoding('utf8');
    var body = '';
    res.on('data',function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log('we got '+ body);
    })
}).end();