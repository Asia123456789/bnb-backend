import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const _supabaseUrl = process.env.SUPABASE_URL as string;
const _supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

if (!_supabaseUrl || !_supabaseAnonKey) {
  throw new Error("Missing Supabase credentials in .env");
}

export const supabase = createClient(_supabaseUrl, _supabaseAnonKey);
export const supabaseUrl = _supabaseUrl;
export const supabaseAnonKey = _supabaseAnonKey;
