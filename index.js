const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8002 });
 

	wss.on('connection', function connection(ws,req) {
			console.log('ip '+req.connection.remoteAddress +' : ' +req.connection.remotePort+' connected');

    	ws.on('message', function incoming(message) {
  				setInterval(function(){ ws.send(''+new Date())}, message);

  		});
 
	});
  

