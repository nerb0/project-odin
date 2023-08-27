import BookInstanceController from "../controllers/bookinstance.controller";
import { Router } from "express";

const bookInstanceRouter = Router();

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
bookInstanceRouter.get(
	"/bookinstance/create",
	BookInstanceController.create_get
);

// POST request for creating BookInstance.
bookInstanceRouter.post(
	"/bookinstance/create",
	BookInstanceController.create_post
);

// GET request to delete BookInstance.
bookInstanceRouter.get(
	"/bookinstance/:id/delete",
	BookInstanceController.delete_get
);

// POST request to delete BookInstance.
bookInstanceRouter.post(
	"/bookinstance/:id/delete",
	BookInstanceController.delete_post
);

// GET request to update BookInstance.
bookInstanceRouter.get(
	"/bookinstance/:id/update",
	BookInstanceController.update_get
);

// POST request to update BookInstance.
bookInstanceRouter.post(
	"/bookinstance/:id/update",
	BookInstanceController.update_post
);

// GET request for one BookInstance.
bookInstanceRouter.get("/bookinstance/:id", BookInstanceController.detail);

// GET request for list of all BookInstance.
bookInstanceRouter.get("/bookinstances", BookInstanceController.list);

export default bookInstanceRouter;
