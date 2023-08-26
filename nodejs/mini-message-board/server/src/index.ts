import cors from "cors";
import express from "express";
import router from "./routes";
import client from "./db";

try {
	await client.connect();
} catch (err) {
	console.log("Error connecting to the database", err);
}
const { PORT = 3000 } = process.env;
const server = express();

server.use(cors({
	origin: "*",
}));
server.use("/", router);

server.listen(PORT, function() {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
