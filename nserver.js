var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var sid = new Array();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	
	socket.on('message', function(msg){
	   
		//send to all on the server
	    // io.emit('message', msg);

	   	//send to only sender
	    //io.to(socket.id).emit('message', msg+" yourself"); or socket.emit("message", msg+" yourself");

	    //store socket id for later use
	    //sid.push(socket.id);

	    //send to all in the group except sender
	    socket.broadcast.emit('message', msg);
	});

  	socket.on("disconnect", function()
	{
		console.log("Socket: "+socket.id+" just disconnected!");
	});
});

io.on("connect", function(socket)
{
	console.log("Socket:"+socket.id+" just joined!");
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});