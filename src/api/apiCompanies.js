import supabaseClient from "@/utils/supabase";

export async function getComapnies (token){
    const supabase = await supabaseClient(token);

    const {data,error} = await supabase.from("companies").select("*");

    if(error){
        console.error("Error fetching companies",error)
        return null;
    }

    return data;
} 
