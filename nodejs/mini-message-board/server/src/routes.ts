import { Router, urlencoded } from "express";
import MessageController from "./controllers/message.ts";

const router = Router();

router.get("/", function (req, res) {
	res.json({
		status: 200,
		body: {
			message: "Hello World!",
		},
	});
});

router.get("/messages", MessageController.getAll);
router.post(
	"/messages/new",
	urlencoded({ extended: true }),
	MessageController.create
);

export default router;
