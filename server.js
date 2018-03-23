var app = require('express')();
var server = app.listen(3000);

var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connect', function (socket) {
    console.log("Server started on port 3000");
});