/** @typedef {import("hono").Handler} Handler */
import { LoginPage } from "../views/Login";

/** @type Handler */
export const handle_index_route = async function handle_index_route(c) {
	return c.redirect("/app/login");
};

/** @type Handler */
export const get_login_page = async function get_login_page(c) {
	const errors = c.req.queries("errors");
	return c.render(<LoginPage />, {});
};
