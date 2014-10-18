var http = require('http');
var path = require('path'); // para extraer el nombre base de la url-uri

var paginas = [
    {ruta:'',out:'INICIO'},
    {ruta:'acerca',out:'Sobre Nosotros '},
    {ruta:'otracosa',out:function(){
    	console.log("Que cosa No?");
    }}
];

var server = http.createServer(function(req, res) {
	var urlfull= decodeURI(req.url);
	var lookup = path.basename(decodeURI(req.url));
	paginas.forEach(function(pag){
	  if(pag.ruta == lookup){	
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end((typeof pag.out === 'function')? pag.out() : pag.out);
	  }	
	});
	console.log("La url base: "+lookup+"\n"+"urlFull: "+urlfull);
	if (!res.finished){
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("Pagina No Encontrada");
	}

});

server.listen(8888);