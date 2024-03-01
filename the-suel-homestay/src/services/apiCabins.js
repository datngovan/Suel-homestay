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