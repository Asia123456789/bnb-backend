import { Hono } from "hono";
import { supabase } from "../lib/supabase.js";

export const authApp = new Hono();

// Registrera användare
authApp.post("/register", async (c) => {
  const { email, password } = await c.req.json();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return c.json({ error: error.message }, 400);
  return c.json({ user: data.user });
});

// Logga in användare
authApp.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return c.json({ error: error.message }, 400);
  return c.json({ session: data.session });
});

