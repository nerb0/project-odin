import { compare } from "bcrypt";
import passport from "passport";
import LocalStrategy from "passport-local";
import { User } from "~/models/User";

/** @param {import("express").Express} server*/
export default function setup_passport(server) {
	server.use(passport.initialize());
	server.use(passport.session());

	passport.use(
		"local",
		new LocalStrategy(async function verify(username, password, next) {
			try {
				const user = await User.findOne({ username });
				if (user) {
					const password_match = await compare(password, user.password);
					if (password_match) {
						return next(null, user);
					} else {
						return next(new Error("Incorrect username or password."));
					}
				} else {
					return next(new Error("Incorrect username or password."));
				}
			} catch (error) {
				return next(error);
			}
		}),
	);

	passport.serializeUser((user, next) => {
		next(null, user.id);
	});

	passport.deserializeUser(async function (id, next) {
		try {
			const user = await User.findById(id);
			return next(null, user);
		} catch (error) {
			return next(error);
		}
	});
}
