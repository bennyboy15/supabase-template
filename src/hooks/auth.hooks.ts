import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, logout, signup } from "../utils/supabase";
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
        onError: (error:Error) => {
            toast.error(error.message);
        }
    })
}

export function useAuthLogin() {
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            toast.success("Successfully logged in");
        },
        onError: (error:Error) => {
            toast.error(error.message);
        }
    })
}

export function useAuthLogout() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.clear();
            toast.success("Successfully logged out");
        },
        onError: (error:Error) => {
            toast.error(error.message);
        }
    })
}

