import { Router } from "express";
import { api_routes } from "./api";
import { LoginPage, LoginView } from "~/views/Login";
import { SignupPage, SignupView } from "~/views/Signup";
import { DashboardPage, DashboardView } from "~/views/Dashboard";
import { JoinMembershipPage, JoinMembershipView } from "~/views/Join";
import { membership_status_id } from "~/views/components/Layout";
import { ErrorMessage } from "~/views/components/Message";

const app_router = Router();
app_router.get("/", function get_home_page(req, res) {
	if (req.is_htmx) res.header("HX-Push-Url", "/app");
	const props = { user: req.user };
	return res.send(
		req.is_htmx ? (
			<DashboardView class="animate-fade-in" {...props} />
		) : (
			<DashboardPage {...props} />
		),
	);
});
app_router.get("/join", function get_join_page(req, res) {
	if (req.user && req.user.is_a_member) {
		const props = { user: req.user };
		if (req.is_htmx) {
			return res.send(
				<ErrorMessage withSwap={false}>
					User is already a member. Redirecting to dashboard...
				</ErrorMessage>,
			);
		}

		return res.send(
			<DashboardPage
				{...props}
				messages={
					<ErrorMessage withSwap={false}>
						User is already a member. Redirecting to dashboard...
					</ErrorMessage>
				}
			>
				<script>
					window.history.pushState('Dashboard', 'EMBERS', '/app');
				</script>
			</DashboardPage>,
		);
	}

	if (req.is_htmx) res.header("HX-Push-Url", "/app/join");
	const props = { user: req.user };
	return res.send(
		req.is_htmx ? (
			<>
				<div hx-swap-oob={`delete:#${membership_status_id}`}></div>
				<JoinMembershipView {...props} />
			</>
		) : (
			<JoinMembershipPage {...props} />
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
	if (req.is_htmx) {
		res.header("HX-Push-Url", "/login");
	}
	return res.send(
		req.is_htmx ? <LoginView class="animate-slide-right" /> : <LoginPage />,
	);
});
router.get("/signup", page_require_guest, function get_signup_page(req, res) {
	if (req.is_htmx) {
		res.header("HX-Push-Url", "/signup");
	}
	return res.send(
		req.is_htmx ? <SignupView class="animate-slide-left" /> : <SignupPage />,
	);
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
