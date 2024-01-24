import AuthorController from "../controllers/authors.controller";
import { Router } from "express";

const authorRouter = Router();

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
authorRouter.get("/author/create", AuthorController.create_get);

// POST request for creating Author.
authorRouter.post("/author/create", AuthorController.create_post);

// GET request to delete Author.
authorRouter.get("/author/:id/delete", AuthorController.delete_get);

// POST request to delete Author.
authorRouter.post("/author/:id/delete", AuthorController.delete_post);

// GET request to update Author.
authorRouter.get("/author/:id/update", AuthorController.update_get);

// POST request to update Author.
authorRouter.post("/author/:id/update", AuthorController.update_post);

// GET request for one Author.
authorRouter.get("/author/:id", AuthorController.detail);

// GET request for list of all Authors.
authorRouter.get("/authors", AuthorController.list);

export default authorRouter;
