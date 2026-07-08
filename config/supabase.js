import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ Advertencia: SUPABASE_URL o SUPABASE_KEY no están definidos en el archivo .env. Las funciones de base de datos fallarán.");
}

// Usamos valores dummy en caso de no estar definidos para evitar que la app crasheé al iniciar
const supabase = createClient(
    supabaseUrl || "https://your-supabase-url.supabase.co",
    supabaseKey || "your-supabase-key"
);

export default supabase;