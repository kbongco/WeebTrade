import supabase from "../lib/supabase";

// Just a sample until Auth is set up in supabase

export async function getUsers() {
  const { data } = await supabase.from("Users").select();
  return data;
}