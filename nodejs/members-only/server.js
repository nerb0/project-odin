import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { routes } from "./src/routes";

const app = new Hono();

app.use("/assets/*", serveStatic({ root: "./public" }));
app.route("/", routes);

export default app;
