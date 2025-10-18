import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const _supabaseUrl = process.env.SUPABASE_URL;
const _supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!_supabaseUrl || !_supabaseAnonKey) {
  throw new Error("Supabase not initialized. Add SUPABASE_URL and SUPABASE_ANON_KEY to .env");
}

export const supabase = createClient(_supabaseUrl, _supabaseAnonKey);

export const supabaseUrl = _supabaseUrl as string;
export const supabaseAnonKey = _supabaseAnonKey as string;
