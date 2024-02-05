import { Router } from "express";
import { get_posts, handle_create_post } from "~/controllers/post.controller";
import {
	handle_login_post,
	handle_response_error,
	handle_signup_post,
} from "~/controllers/session.controller";
import { handle_user_join_membership } from "~/controllers/user.controller";
import { LoginView } from "~/views/Login";
import { SuccessMessage } from "~/views/components/Message";

const router = Router();

// app_routes.use();
router.post("/login", ...handle_login_post);
router.post("/logout", function (req, res) {
	if (req.user) {
		req.logout({}, function (error) {
			if (error) return handle_response_error(res, error);
			return res.header("HX-Push-Url", "/login").send(
				<>
					<SuccessMessage message="Logged out successfully." />
					<LoginView class="animate-fade-in" />
				</>,
			);
		});
	} else {
		return handle_response_error(
			res,
			new Error("No user is currently logged in."),
		);
	}
});
router.post("/signup", ...handle_signup_post);
router.post("/post", ...handle_create_post);
router.post("/join", ...handle_user_join_membership);
router.get("/posts", get_posts);

router.get("/", function get_index_route(req, res) {
	res.send({
		message: "result",
	});
});

export const api_routes = router;
