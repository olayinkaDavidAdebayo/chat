var app = require('express')();
//var http = require('http').Server(app);

var io = require('socket.io')(app);
var port = process.env.PORT || 3000;
var sid = new Array();

http.listen(port, function(){
  console.log('listening on *:' + port);
});