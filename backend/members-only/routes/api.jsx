/** @type {import("fastify/types/plugin").FastifyPluginCallback } */
const api_routes = function app_routes(fastify, opts, done) {
	fastify.get("/", function (req, res) {
		res.send({
			message: "result",
		});
	});
	done();
};

export default api_routes;
