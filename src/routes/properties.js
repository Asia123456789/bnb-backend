"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyApp = void 0;
const hono_1 = require("hono");
exports.propertyApp = new hono_1.Hono();
exports.propertyApp.get("/", (c) => c.json({ message: "Lista alla properties" }));
exports.propertyApp.post("/", (c) => c.json({ message: "Skapa property" }));
