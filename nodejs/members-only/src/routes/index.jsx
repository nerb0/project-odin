import { Hono } from "hono";
import {
	get_login_page,
	handle_index_route,
} from "../controllers/session.controller";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "../views/Layout";

const app_router = new Hono();
app_router.use("*", jsxRenderer(Layout));
app_router.get("/login", get_login_page);

const router = new Hono();

router.get("/", handle_index_route);
router.route("/app", app_router);

export const routes = router;
