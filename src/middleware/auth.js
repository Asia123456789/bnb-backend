"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuth = void 0;
const supabase_js_1 = require("../lib/supabase.js");
const optionalAuth = async (c, next) => {
    const authHeader = c.req.header("Authorization");
    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        const { data, error } = await supabase_js_1.supabase.auth.getUser(token);
        if (!error && data.user) {
            c.set("user", data.user);
        }
    }
    await next();
};
exports.optionalAuth = optionalAuth;
