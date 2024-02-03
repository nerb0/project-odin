import { Router } from "express";
import { api_routes } from "./api";
import { LoginPage, LoginView } from "~/views/Login";
import { SignupPage, SignupView } from "~/views/Signup";
import { DashboardPage, DashboardView } from "~/views/Dashboard";

const app_router = Router();
app_router.get("/", function get_home_page(req, res) {
	if (req.is_htmx) res.header("HX-Push-Url", "/app");
	return res.send(
		req.is_htmx ? (
			<DashboardView user={req.user} />
		) : (
			<DashboardPage user={req.user} />
		),
	);
});

const router = Router();
router.use(verify_htmx);
router.use("/api", api_routes);
router.use("/app", app_router);

router.get("/", function handle_index_route(req, res) {
	res.redirect(req.user ? "/app" : "/login");
});
router.get("/login", page_require_guest, function get_login_page(req, res) {
	return res.send(req.is_htmx ? <LoginView /> : <LoginPage />);
});
router.get("/signup", page_require_guest, function get_signup_page(req, res) {
	return res.send(req.is_htmx ? <SignupView /> : <SignupPage />);
});

/** @type {import("express").RequestHandler}*/
function page_require_admin(req, res, next) {
	if (req.user) return next();
	res.send("Admin only");
}
/** @type {import("express").RequestHandler}*/
function page_require_guest(req, res, next) {
	if (!req.user) return next();
	res.redirect("/");
}
/** @type {import("express").RequestHandler}*/
function verify_htmx(req, res, next) {
	req.is_htmx = !!req.get("HX-Request");
	return next();
}

export const routes = router;
