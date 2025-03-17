import { supabase } from "@/supabaseClient";

export async function signUpUser(signUpData) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
      options: {
        data: {
          first_name: signUpData.firstName,
          last_name: signUpData.lastName,
        },
      },
    });
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("signUp error:", error.message);
    return { success: false, error };
  }
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new error(error);

  return data?.user;
}
