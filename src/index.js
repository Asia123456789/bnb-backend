"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const dotenv_1 = __importDefault(require("dotenv"));
const auth_js_1 = require("./middleware/auth.js");
const properties_js_1 = require("./routes/properties.js");
const bookings_js_1 = require("./routes/bookings.js");
dotenv_1.default.config();
const app = new hono_1.Hono();
app.use("*", auth_js_1.optionalAuth); // autentisering via Supabase
app.route("/properties", properties_js_1.propertyApp);
app.route("/bookings", bookings_js_1.bookingApp);
(0, node_server_1.serve)({ fetch: app.fetch, port: Number(process.env.HONO_PORT) || 3000 }, (info) => {
    console.log(`🚀 Server running on http://localhost:${info.port}`);
});
