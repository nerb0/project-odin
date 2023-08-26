import cors from "cors";
import express from "express";
import router from "./routes.ts";

const { PORT = 3000 } = process.env;
const server = express();

server.use(cors({
	origin: "*",
}));
server.use("/", router);

server.listen(PORT, function() {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
