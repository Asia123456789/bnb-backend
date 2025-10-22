"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authApp = void 0;
const hono_1 = require("hono");
const supabase_js_1 = require("../lib/supabase.js");
exports.authApp = new hono_1.Hono();
// Registrera användare
exports.authApp.post("/register", async (c) => {
    const { email, password } = await c.req.json();
    const { data, error } = await supabase_js_1.supabase.auth.signUp({ email, password });
    if (error)
        return c.json({ error: error.message }, 400);
    return c.json({ user: data.user });
});
// Logga in användare
exports.authApp.post("/login", async (c) => {
    const { email, password } = await c.req.json();
    const { data, error } = await supabase_js_1.supabase.auth.signInWithPassword({ email, password });
    if (error)
        return c.json({ error: error.message }, 400);
    return c.json({ session: data.session });
});
