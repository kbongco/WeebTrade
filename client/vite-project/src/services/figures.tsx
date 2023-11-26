import supabase from '../lib/supabase';

export async function getFigures() {
  const { data } = await supabase.from("Figures").select();
  return data;
}