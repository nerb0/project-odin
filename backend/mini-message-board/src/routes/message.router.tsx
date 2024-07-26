import Elysia, { t } from "elysia";
import { messages } from "../constants";

export const message_router = new Elysia({ prefix: "/message" })
  .get("s", () => messages)
  .post(
    "",
    ({ body }) => {
      messages.push({ ...body, added: new Date() });
      return messages;
    },
    { body: t.Object({ text: t.String(), user: t.String() }) },
  );
