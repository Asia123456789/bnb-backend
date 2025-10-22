"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const dotenv_1 = __importDefault(require("dotenv"));
const auth_js_1 = require("./middleware/auth.js");
const auth_js_2 = require("./routes/auth.js");
const properties_js_1 = require("./routes/properties.js");
const bookings_js_1 = require("./routes/bookings.js");
dotenv_1.default.config();
const app = new hono_1.Hono();
// Middleware för autentisering via Supabase
app.use("*", auth_js_1.optionalAuth);
// Routes
app.route("/auth", auth_js_2.authApp);
app.route("/properties", properties_js_1.propertyApp);
app.route("/bookings", bookings_js_1.bookingApp);
// Starta servern
(0, node_server_1.serve)({ fetch: app.fetch, port: Number(process.env.HONO_PORT) || 3000 }, (info) => {
    console.log(`🚀 Server running on http://localhost:${info.port}`);
});
