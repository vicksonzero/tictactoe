// app.js
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var util = require('util');
var compression = require('compression');


function initApp(){
	var port=process.env.PORT||80;
	server.listen(port, function(){
	  util.log('listening on *: ' + port);
	});
	app.use(compression({threshold: 512}));
	app.use(express.static(__dirname + '/public'));
	app.get('/', function(req, res){
	  res.sendfile(__dirname + '/public/index.html');
	});
}

function bindMessages(){
	
}



initApp();
