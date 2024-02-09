import { hashSync } from "bcrypt";
import { body, validationResult } from "express-validator";
import passport from "passport";
import { ADMIN_PASSWORD } from "~/constants";
import { User } from "~/models/User";
import { DashboardView } from "~/views/Dashboard";
import {
	toast_container_id,
	user_auth_view_id,
} from "~/views/components/Layout";
import { ErrorMessage, SuccessMessage } from "~/views/components/Message";

/** @type {import("express").RequestHandler[]} */
export const handle_signup_post = [
	body("username")
		.notEmpty()
		.withMessage("Username is required. Please enter your username.")
		.custom(async (value) => {
			if (await User.findOne({ username: value }))
				throw new Error("Username is already taken.");
			else return value;
		})
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
	async function handle_user_signup(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// __AUTO_GENERATED_PRINT_VAR_START__
			console.error(errors); // __AUTO_GENERATED_PRINT_VAR_END__
			return handle_response_error(res, {
				messages: errors.array().map((error) => error.msg),
			});
		}

		const { username, password, first_name, last_name, admin_password } =
			req.body;

		if (admin_password && admin_password !== ADMIN_PASSWORD)
			return handle_response_error(res, {
				message: "Password does not match.",
			});

		try {
			await User.create({
				username,
				password: hashSync(password, 10),
				first_name,
				last_name,
				is_admin: admin_password === ADMIN_PASSWORD,
			});
			return res.send(
				<SuccessMessage>
					<a
						href="/login"
						hx-target={`#${user_auth_view_id}`}
						hx-swap="outerHTML"
						hx-boost="true"
					>
						Your account has been created. Click here to login
					</a>
				</SuccessMessage>,
			);
		} catch (error) {
			// __AUTO_GENERATED_PRINT_VAR_START__
			console.error(error); // __AUTO_GENERATED_PRINT_VAR_END__
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
	function handle_user_login(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return handle_response_error(res, {
				messages: errors.array().map((error) => error.msg),
			});

		passport.authenticate(
			"local",
			{ session: true },
			async function handle_user_login(err, user, info, status) {
				if (err) return handle_response_error(res, { message: err.message });
				else {
					req.login(user, function (error) {
						if (error)
							return handle_response_error(res, {
								message:
									"Unable to create login session. Please try again later.",
							});
						res.header("HX-Push-Url", "/app").send(
							<>
								<SuccessMessage message="You have successfully logged in." />
								<DashboardView class="animate-fade-in" user={user} />
							</>,
						);
					});
				}
			},
		)(req, res);
	},
];

/**
 * Used to handle errors on a request by sending error modal
 * @param {import("express").Response} res An Express Response object use to send the error response
 * @param {{children: JSX.Element} & ({ message: string; messages?: undefined } | { message?: undefined; messages: string[] })} error Message/s to display to user
 */
export function handle_response_error(res, error) {
	res
		.header("HX-Retarget", `#${toast_container_id}`)
		.header("HX-Reswap", "beforeend");
	if (error.messages) {
		return res.send(
			<>
				{error.messages.map((message) => (
					<ErrorMessage message={message} />
				))}
				{error.children}
			</>,
		);
	}

	return res.send(
		<>
			<ErrorMessage message={error.message} />
			{error.children}
		</>,
	);
}
