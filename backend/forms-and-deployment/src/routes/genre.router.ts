import GenreController from "../controllers/genres.controller";
import { Router } from "express";

const genreRouter = Router();

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
genreRouter.get("/genre/create", GenreController.create_get);

//POST request for creating Genre.
genreRouter.post("/genre/create", GenreController.create_post);

// GET request to delete Genre.
genreRouter.get("/genre/:id/delete", GenreController.delete_get);

// POST request to delete Genre.
genreRouter.post("/genre/:id/delete", GenreController.delete_post);

// GET request to update Genre.
genreRouter.get("/genre/:id/update", GenreController.update_get);

// POST request to update Genre.
genreRouter.post("/genre/:id/update", GenreController.update_post);

// GET request for one Genre.
genreRouter.get("/genre/:id", GenreController.detail);

// GET request for list of all Genre.
genreRouter.get("/genres", GenreController.list);

export default genreRouter;
