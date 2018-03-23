var app = require('express')();
var server = app.listen(3000);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket)
   {
     socket.on('myEvent',function(){ /* … */ });
   }
);