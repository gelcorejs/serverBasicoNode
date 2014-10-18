var http = require('http');
    var server= http.createServer(function(req,res){
    	res.writeHead(200,{"Content-Type":"text/html"});
    	res.end("<h1>Hola NodeJs</h1>");
    });
    
    server.listen(9999);