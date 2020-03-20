const express = require("express");

const app = express();

app.listen(3000, () => {
	console.log("SERVER STARTED...");
});

app.get("/", (req, res) => {
	console.log("access to / path");
	res.send("hello world !");
});

app.get("/", (req, res) => {
	console.log("access to / path");
	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Project-2></title>
			</head>
			<body>
				<h1>Hello world !</h1>
			</body>
		</html>
	`);
});