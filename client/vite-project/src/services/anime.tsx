import { createClient } from "@supabase/supabase-js";

const baseURL = import.meta.env.BASE_URL;
const anonKey = import.meta.env.ANON_KEY;


export async function getAnime() {
  const { data } = await supabase.from("Anime").select();
  console.log(data);
  return data;
}