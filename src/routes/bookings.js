"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingApp = void 0;
const hono_1 = require("hono");
exports.bookingApp = new hono_1.Hono();
exports.bookingApp.get("/", (c) => c.json({ message: "Lista alla bookings" }));
exports.bookingApp.post("/", (c) => c.json({ message: "Skapa booking" }));
