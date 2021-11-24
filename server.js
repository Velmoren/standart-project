const next = require("next");
const express = require("express");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.use(handle).listen(process.env.PORT, (err) => {
		if (err) throw err;
		console.log("> Ready on port " + process.env.PORT);
	});
});