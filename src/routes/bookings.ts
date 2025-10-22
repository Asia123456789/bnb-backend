import { Hono } from "hono";
export const bookingApp = new Hono();

bookingApp.get("/", (c) => c.json({ message: "Lista alla bookings" }));
bookingApp.post("/", (c) => c.json({ message: "Skapa booking" }));
