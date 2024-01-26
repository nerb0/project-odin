import fastify_middleware from "@fastify/middie";
import serve_static from "@fastify/static";
import Fastify from "fastify";
import path from "path";
import { PORT, __dirname } from "./constants";
import { connect_db } from "./db";
import routes from "./routes";

const server = Fastify({
	logger: true,
});

await server.register(fastify_middleware);
await server.register(serve_static, {
	root: path.join(__dirname, "public"),
	prefix: "/assets/", // optional: default '/'
});
await server.register(routes);

try {
	await connect_db();
	server.listen({ port: PORT });
} catch (err) {
	server.log.error(err);
	process.exit(1);
}
