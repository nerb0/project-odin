import { Elysia } from "elysia";
import { router } from "./routes";
import staticPlugin from "@elysiajs/static";

const app = new Elysia()
  .use(router)
  .use(staticPlugin())
  .listen(3000, (server) => {
    console.log(`🦊 Elysia is running at ${server?.hostname}:${server?.port}`);
  });
