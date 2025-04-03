import { supabase } from "@/supabaseClient";

export const dataUpload = async ({ jobTitle, location }) => {
  const { data, error } = await supabase.from("Job_Resume").insert([
    {
      job_title: jobTitle,
      location,
    },
  ]);
  if (error) throw new Error(error);
  return data;
};

export const fileUpload = async (selectedFile) => {
  const { data: fileData, error: fileError } = await supabase.storage
    .from("resume")
    .upload(`jobs/${selectedFile.name}`, selectedFile, {
      upsert: true,
      contentType: selectedFile.type,
    });
  console.log(fileData);
  if (fileError) console.log(fileError.message);

  return { fileData };
};
