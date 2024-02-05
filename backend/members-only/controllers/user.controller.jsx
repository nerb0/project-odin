import { body, validationResult } from "express-validator";
import { handle_response_error } from "./session.controller";
import { SECRET_MEMBERSHIP_CODE } from "~/constants";
import { User } from "~/models/User";
import { ErrorMessage, SuccessMessage } from "~/views/components/Message";
import { DashboardContent } from "~/views/Dashboard";
import { app_container_id } from "~/views/components/Layout";

/** @type {import("express").RequestHandler[]}*/
export const handle_user_join_membership = [
	body("membership_code")
		.notEmpty()
		.withMessage("Membership Code is required.")
		.custom(function (value) {
			if (value !== SECRET_MEMBERSHIP_CODE) {
				throw new Error("The code you entered is incorrect.");
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

		if (req.user.is_a_member) {
			return res.header("HX-Push-Url", "/app").send(
				<>
					<ErrorMessage>
						User is already a member. Redirecting to dashboard...
					</ErrorMessage>
					<div hx-swap-oob={`innerHTML:#${app_container_id}`}>
						<DashboardContent user={req.user} />
					</div>
				</>,
			);
		}

		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.user._id },
				{ is_a_member: true },
			);
			return res.header("HX-Push-Url", "/app").send(
				<>
					<SuccessMessage>
						You have successfully joined the club. Redirecting to dashboard...
					</SuccessMessage>
					<div hx-swap-oob={`innerHTML:#${app_container_id}`}>
						<DashboardContent user={req.user} />
					</div>
				</>,
			);
		} catch (error) {
			return handle_response_error(res, {
				message: "Unable to update user membership status. Please try again.",
			});
		}
	},
];
