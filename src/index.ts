import { Hono } from "hono";
import { serve } from "@hono/node-server";
import dotenv from "dotenv";

import { optionalAuth } from "./middleware/auth.js";
import { propertyApp } from "./routes/properties.js";
import { bookingApp } from "./routes/bookings.js";

dotenv.config();

const app = new Hono();

app.use("*", optionalAuth); // autentisering via Supabase
app.route("/properties", propertyApp);
app.route("/bookings", bookingApp);

serve({ fetch: app.fetch, port: Number(process.env.HONO_PORT) || 3000 }, (info) => {
  console.log(`🚀 Server running on http://localhost:${info.port}`);
});