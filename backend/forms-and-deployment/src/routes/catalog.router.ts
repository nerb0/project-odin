import { Router, json, urlencoded } from "express";
import BookController from "../controllers/books.controller";
import authorRouter from "./author.router";
import bookRouter from "./book.router";
import bookInstanceRouter from "./bookinstance.router";
import genreRouter from "./genre.router";

const catalogRouter = Router();

// GET catalog home page.
catalogRouter.use(urlencoded({ extended: true }));
catalogRouter.use(json());
catalogRouter.use("/", bookRouter)
catalogRouter.use("/", genreRouter)
catalogRouter.use("/", authorRouter)
catalogRouter.use("/", bookInstanceRouter)

export default catalogRouter;
