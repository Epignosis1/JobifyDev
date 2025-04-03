import { supabase } from "@/supabaseClient";

export async function signup({ email, password, firstName, lastName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data.user;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new error(error);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://jobify-hazel-three.vercel.app/dashboard",
    },
  });
  if (error) throw new Error(error.message);
}

export async function forget({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://jobify-hazel-three.vercel.app/resetPassword",
  });
  console.log(data);
  if (error) {
    throw new Error(error.message);
  }
}
