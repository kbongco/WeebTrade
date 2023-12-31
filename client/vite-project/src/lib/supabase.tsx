import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASEURL as string;
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;