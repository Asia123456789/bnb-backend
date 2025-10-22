import { Context, Next } from "hono";
import { supabase } from "../lib/supabase.js";

export const optionalAuth = async (c: Context, next: Next) => {
  const authHeader = c.req.header("Authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    const { data, error } = await supabase.auth.getUser(token);
    if (!error && data.user) {
      c.set("user", data.user);
    }
  }
  await next();
};
