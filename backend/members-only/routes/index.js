import api_routes from "./api";
import app_routes from "./app";

/** @type {import("fastify/types/plugin").FastifyPluginCallback } */
export default function (fastify, opts, done) {
	fastify.register(api_routes, { prefix: "/api" });
	fastify.register(app_routes);
	done();
}
