import * as z from "zod";

export const LoginSchema = z.object({
    email: z.email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignupSchema = LoginSchema.extend({
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
});

export type LoginCredentialsType = z.infer<typeof LoginSchema>;
export type SignupCredentialsType = z.infer<typeof SignupSchema>;
