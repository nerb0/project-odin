import { Router } from "express";
import catalogRouter from "./catalog.router";
import userRouter from "./user.router";

const router = Router();

router.use("/users", userRouter);
router.use("/catalog", catalogRouter);

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


export default router;
