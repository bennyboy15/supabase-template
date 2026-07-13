import * as z from "zod";

export const UserSchema = z.object({
    email: z.email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AuthEmailCredentialsType = z.infer<typeof UserSchema>;
