const express = require("express");
const database = require("./database");
//initialize express
const app = express();


app.get("/helloworldpage", function (req, res) {
	// res.send(database);
	res.send(database);
});

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
