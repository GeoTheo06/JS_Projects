const ws = new WebSocket("ws://localhost:80");

//initial message
ws.addEventListener("open", (event) => {
	ws.send("crashed you hehe!");
});

ws.addEventListener("message", (event) => {
	ws.send(event.data);
});
