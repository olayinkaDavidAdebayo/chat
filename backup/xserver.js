var net = require('net');

var server = net.createServer();

server.on('connection', function(socket){
  socket.write('First Message', function(){
    socket.write('Second Message')
  })
})

var client = new net.Socket();
client.setEncoding('utf8');

server.listen(9999, function(){
  client.connect(9999);
});

client.on('data', function(data){
  console.log('data received on socket:\n' + data);
});