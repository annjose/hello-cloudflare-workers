import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api", (c) => {
  return c.json({ name: "Cloud!" });
});

export default app;
