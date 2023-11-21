import supabase from "../lib/supabase";


export async function getAnime() {
  const { data } = await supabase.from("Anime").select();
  console.log(data);
  return data;
}