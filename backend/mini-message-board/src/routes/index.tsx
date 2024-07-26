import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { messages } from "../constants";
import { Layout } from "../views/Layout";

export const router = new Elysia()
  .use(html())
  .get("/", () => (
    <Layout title="Messaging App">
      <div class="p-2">
        <div class="font-bold text-lg">Messages</div>
        {messages.map((message) => (
          <div>
            <div class="font-bold" safe>
              {message.user} | {message.added.toLocaleDateString()}
            </div>
            <div safe>{message.text}</div>
          </div>
        ))}
      </div>
    </Layout>
  ))
  .post("/new", () => "hello");
