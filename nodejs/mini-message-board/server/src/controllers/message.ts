import { create, getAll } from "../services/message.ts";

const MessageController = {
	getAll: async function(req, res) {
		const data = await getAll();
		res.json(data);
	} as RouterHandler,
	create: async function(req, res) {
		const origin = req.header("referer");

		const { username: user, message, redirect = false } = req.body;
		if (!user || !message) {
			origin && res.status(404).redirect(origin);
			return;
		}

		await create(user, message);
		if (origin && redirect) res.redirect(origin);
	} as RouterHandler,
} as const;

export default MessageController;
