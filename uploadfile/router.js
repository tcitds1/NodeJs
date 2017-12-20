function route(handle, pathname, response, data) {
    if(typeof handle[pathname] == 'function') {
        handle[pathname](response,data);
    }
    else {
        response.writeHead('404',{'Content-Type':'text/plain'});
        response.write('not found');
        response.end();
    }
}
module.exports = route;