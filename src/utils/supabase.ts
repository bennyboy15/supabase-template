import { createClient } from "@supabase/supabase-js";
import type { LoginCredentialsType } from "@/schemas/auth.schemas";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
        "Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY — copy .env.example to .env and fill in your project's values"
    );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// -- AUTH --
export async function signup(user: LoginCredentialsType) {
    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
    });

    if (error) throw error;
    // Supabase returns a fake user (no identities) instead of an error
    // when the email is already registered
    if (data.user?.identities?.length === 0) {
        throw new Error("An account with this email already exists");
    }
    return data;
}

export async function login(user: LoginCredentialsType) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
    });

    if (error) throw error;
    return data;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return;
}
