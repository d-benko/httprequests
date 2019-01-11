var http = require("http");
var httpserver = http.createServer(
		function(_request,response){
			console.log("Received a Client Request");
			response.write("Hi, Dear JournalDEV User.")
		}
	);
httpserver.listen(8001);