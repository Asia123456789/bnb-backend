import { Hono } from "hono";
export const propertyApp = new Hono();

propertyApp.get("/", (c) => c.json({ message: "Lista alla properties" }));
propertyApp.post("/", (c) => c.json({ message: "Skapa property" }));
