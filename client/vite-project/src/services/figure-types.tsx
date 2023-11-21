import supabase from '../lib/supabase';

export async function getFigureTypes() {
  const { data } = await supabase.from("FigureType").select();
  return data;
}