import { hashSync } from "bcrypt";
import { body, validationResult } from "express-validator";
import passport from "passport";
import { User } from "~/models/User";
import { DashboardView } from "~/views/Dashboard";
import { toast_container_id } from "~/views/components/Layout";
import { ErrorMessage, SuccessMessage } from "~/views/components/Message";

/** @type {import("express").RequestHandler[]}*/
export const handle_signup_post = [
	body("username")
		.notEmpty()
		.withMessage("Username is required. Please enter your username.")
		.trim(),
	body("password")
		.notEmpty()
		.withMessage("Password is required. Please enter your password."),
	body("first_name")
		.notEmpty()
		.withMessage("First Name is required. Please enter your first name.")
		.trim(),
	body("last_name")
		.notEmpty()
		.withMessage("Last Name is required. Please enter your last name.")
		.trim(),
	body("confirm_password")
		.notEmpty()
		.withMessage("Confirm Password is required.")
		.custom(function (value, { req, loc, path }) {
			if (value !== req.body.password) {
				throw new Error("Password does not match.");
			} else {
				return value;
			}
		}),
	async function handle_signup_post(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return handle_response_error(res, {
				messages: errors.array().map((error) => error.msg),
			});

		const { username, password, first_name, last_name, confirm_password } =
			req.body;

		if (password !== confirm_password)
			return handle_response_error(res, {
				message: "Password does not match.",
			});

		try {
			await User.create({
				username,
				password: hashSync(password, 10),
				first_name,
				last_name,
			});
			return res.send(
				<SuccessMessage>
					<a href="/login" hx-boost="true">
						Your account has been created. Click here to login
					</a>
				</SuccessMessage>,
			);
		} catch (error) {
			return handle_response_error(res, {
				message: "Unable to create user. Please try again later.",
			});
		}
	},
];

/** @type {import("express").RequestHandler[]}*/
export const handle_login_post = [
	body("username").notEmpty().withMessage("Please provide a username."),
	body("password").notEmpty().withMessage("Please provide a password."),
	function (req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return handle_response_error(res, {
				messages: errors.array().map((error) => error.msg),
			});

		passport.authenticate(
			"local",
			async function handle_user_login(err, user, info, status) {
				if (err) return handle_response_error(res, { message: err.message });
				else {
					req.login(user, function (error) {
						if (error)
							return handle_response_error(res, {
								message:
									"Unable to create login session. Please try again later.",
							});
						return res.header("HX-Push-Url", "/app").send(
							<>
								<SuccessMessage message="You have successfully logged in." />
								<DashboardView user={user} />
							</>,
						);
					});
				}
			},
		)(req, res);
	},
];

/**
 * @param res {import("express").Response}
 * @param error {{ message: string; messages: string[] }}
 */
export function handle_response_error(res, { message, messages }) {
	res
		.header("HX-Retarget", `#${toast_container_id}`)
		.header("HX-Reswap", "beforeend");
	if (messages) {
		return res.send(
			<>
				{messages.map((message) => (
					<ErrorMessage message={message} />
				))}
			</>,
		);
	}
	return res.send(<ErrorMessage message={message} />);
}
