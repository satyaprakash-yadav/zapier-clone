import { z } from "zod";

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
        error: "Passwords don't match",
        path: ["confirmPassword"]
    });
