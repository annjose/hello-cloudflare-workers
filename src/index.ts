import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api", (c) => {
  return c.json({ name: "Cloud!" });
});

app.get("/hello", (c) => {
  const name = c.req.query("name") ?? "World";

  let message = `Hello ${name}!`;
  message += `\n\nNote: You can give query parameters ?name=abc`;

  return c.text(message)
});

export default app;
