import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
  const supabase = await supabaseClient(token);

  let query = supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url),saved:saved_jobs(id)");

  if (location) {
    query = query.eq("location", location);
  }

  if (company_id) {
    query = query.eq("company_id", company_id);
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.log("Error fetching jobs:", error);
    return null;
  }

  return data;
}

export async function saveJobs(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

  let query = supabase
    .from("jobs")
    .select("*,company:companies(name,logo_url),saved:saved_jobs(id)");
  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", saveData.job_id);

    if (deleteError) {
      console.error("Error deleting saved jobs:", deleteError);
      return null;
    }
    
    return data;
  } else {
    const { data, error: insertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .select();

    if (insertError) {
      console.log("Error fetching jobs:", insertError);
      return null;
    }

    return data;
  }
}