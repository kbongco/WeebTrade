import supabase from '../lib/supabase';

export async function getShops() {
  const { data } = await supabase.from("Shops").select();
  console.log(data);
  return data;
}