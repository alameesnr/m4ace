var http = required(http)
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Welcome to my server')
    res.end();
}).listen(8001);