var app = require('express')();
var server = app.listen(3000);

var io = require('socket.io').listen(server);
