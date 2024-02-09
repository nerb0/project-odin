import "@kitajs/html/register";
import express from "express";
import { default as session } from "express-session";
import path from "path";
import {
	NODE_ENV,
	PORT,
	SESSION_SECRET_KEY,
	__dirname,
	redis_client,
	redis_store,
} from "./constants";
import { connect_db } from "./db";
import { routes } from "./routes";
import setup_passport from "./routes/auth";

const server = express();

server.use("/assets", express.static(path.join(__dirname, "public")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(
	session({
		store: redis_store,
		secret: SESSION_SECRET_KEY,
		resave: true,
		saveUninitialized: true,
		cookie: {
			sameSite: "lax",
			httpOnly: true,
			secure: NODE_ENV === "production",
			path: "/",
			signed: true,
		},
	}),
);
setup_passport(server);
server.use(routes);

try {
	await connect_db();
	await redis_client.connect();
	server.listen({ port: PORT });
	console.log("Server ready at: http://localhost:" + PORT);
} catch (err) {
	console.error(err);
	process.exit(1);
}
