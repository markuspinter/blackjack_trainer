const express = require('express');
const path = __dirname + '/client/';

var app = express();
var http = require('http').Server(app);
var ioClient = require('socket.io')(http);
var clients = [];
var port = 80;

const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// Search for argument port= in node cli arguments
process.argv.forEach(arg => {
    if(arg.startsWith("port=")){
        var reqPort = arg.slice(arg.indexOf("=") + 1);
        reqPort = Number.parseInt(reqPort);
        
        // check validity of requested port
        if(reqPort >= 0 && reqPort <= 65353) port = reqPort;
        else console.log(arg + " doesn't include a valid port number, using default port instead: " + port);
    }
  });

port = process.env.PORT || port;

app.use(express.static(__dirname + '/client/'));

var events = require('events');
const { NONAME } = require('dns');
var eventEmitter = new events.EventEmitter();

ioClient.on('connection', function(socket){
    
    console.log('user connected');

    socket.on('disconnect', function(msg){
        console.log('user disconnected');
    });
});

app.get('/', function(req, res){
	res.sendFile(path + 'index.html')	
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
