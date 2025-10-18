import { Hono } from "hono";
import { serve } from "@hono/node-server";
import dotenv from "dotenv";

dotenv.config();

const app = new Hono();

app.get("/", (c) => c.text("Backend running ✅"));

serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Server running at http://localhost:3000 🚀");
