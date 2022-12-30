import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 80 });

wss.on('connection', function connection(ws) {
	ws.on('message', (message) => {
		ws.send(message);
	});
});
