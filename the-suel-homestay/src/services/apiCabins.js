import supabase from "./supabase"
export async function getCabins(){
let { data, error } = await supabase
.from('cabins')
.select('*')
if(error){
    console.error("Cabins could not be load")
    throw new Error("Cabins could not be load")
}
    return data;
}
export async function deleteProperty(id){
const {data, error } = await supabase
.from('cabins')
.delete()
.eq("id", id)
if(error){
    console.error("Cabin could not be deleted");
    throw new Error("Cabin could not be deleted");
}
return data;
}

export async function insertProperty(newCabin){
    const { data, error } = await supabase
  .from('cabins')
  .insert([newCabin])
  .select()
  if(error){
    console.error("Cabin could not be inserted");
    throw new Error("Cabin could not be inserted");
}
return data;
}