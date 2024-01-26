import "@kitajs/html/register";
import fastifyPassport, { Strategy } from "@fastify/passport";
import fastifySecureSession from "@fastify/secure-session";
import { Layout } from "~/views/Layout";
import { __dirname } from "~/constants";
import path from "path";
import { readFileSync } from "fs";

/** @type {import("fastify/types/plugin").FastifyPluginCallback } */
const app_routes = function app_routes(fastify, opts, done) {
	fastifyPassport.use(
		new Strategy(function verify(username, password, cb) {
			// db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
			//   if (err) { return cb(err); }
			//   if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
			//
			//   crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
			//     if (err) { return cb(err); }
			//     if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
			//       return cb(null, false, { message: 'Incorrect username or password.' });
			//     }
			//     return cb(null, row);
			//   });
			// });
		}),
	);
	fastify.register(fastifySecureSession, {
		key: readFileSync(path.join(__dirname, "secret-key")),
	});
	fastify.register(fastifyPassport.initialize());
	fastify.register(fastifyPassport.secureSession());
	fastify.get("/", function (req, res) {
		res.type("text/html");
		res.send(
			<Layout>
				<div class="bg-green-500 font-bold">Test</div>
			</Layout>,
		);
	});
	done();
};

export default app_routes;
