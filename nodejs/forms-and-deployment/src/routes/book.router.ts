import BookController from "../controllers/books.controller";
import { Router } from "express";

const bookRouter = Router();

// GET catalog home page.
bookRouter.get("/", BookController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
bookRouter.get("/book/create", BookController.create_get);

// POST request for creating Book.
bookRouter.post("/book/create", BookController.create_post);

// GET request to delete Book.
bookRouter.get("/book/:id/delete", BookController.delete_get);

// POST request to delete Book.
bookRouter.post("/book/:id/delete", BookController.delete_post);

// GET request to update Book.
bookRouter.get("/book/:id/update", BookController.update_get);

// POST request to update Book.
bookRouter.post("/book/:id/update", BookController.update_post);

// GET request for one Book.
bookRouter.get("/book/:id", BookController.detail);

// GET request for list of all Book items.
bookRouter.get("/books", BookController.list);

export default bookRouter;
