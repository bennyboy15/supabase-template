import { useMutation } from "@tanstack/react-query";
import { login, logout, resetPassword, signup, updatePassword } from "@/utils/supabase";
import toast from "react-hot-toast";

export function useAuthSignup() {
    return useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            if (data.session) {
                toast.success("Successfully signed up");
            } else {
                toast.success("Check your email to confirm your account");
            }
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
}

export function useAuthLogin() {
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            toast.success("Successfully logged in");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
}

export function useAuthLogout() {
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            toast.success("Successfully logged out");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
}

export function useAuthResetPassword() {
    return useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success("Check your email for a password reset link");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
}

export function useAuthUpdatePassword() {
    return useMutation({
        mutationFn: updatePassword,
        onSuccess: () => {
            toast.success("Password updated");
        },
        onError: (error: Error) => {
            toast.error(error.message);
        },
    });
}
