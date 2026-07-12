import { createClient } from '@supabase/supabase-js';
import type { AuthEmailCredentialsType } from '../types/auth.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// -- AUTH --
export async function signup(user: AuthEmailCredentialsType) {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  if (error) throw error;
  return data;
}

export async function login(user: AuthEmailCredentialsType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (error) throw error;
  return data;
}

export async function logout() {
    const {error} = await supabase.auth.signOut();
    if (error) throw error;
    return;
}