var app = require('express')();
var server = app.listen(3000);

var io = require('socket.io').listen(server);

io.on('connection', function(socket)
{
	socket.on('message', function(msg){
     console.log("Socket:"+socket.id+" just joined!");
 	});
}
);