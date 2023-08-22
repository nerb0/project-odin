import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
	let contentType = "text/html";
	let response = "";

	if (req.url == "/") {
		response = await readFile("./index.html", "utf-8");
	} else if (req.url == "/about") {
		response = await readFile("./about.html", "utf-8");
	} else if (req.url == "/contact-me") {
		response = await readFile("./contact-me.html", "utf-8");
	} else if (req.url == "/css/style.css") {
		contentType = "text/css";
		response = await readFile("./style.css", "utf-8");
	} else {
		response = await readFile("./404.html", "utf-8");
	}

	res.statusCode = 200;
	res.setHeader("Content-Type", contentType);
	res.end(response);
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`App is listening on http://localhost:${PORT}`);
});
