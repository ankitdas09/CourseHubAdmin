import z from "zod";

export interface IAuth {
    username: string;
    email: string;
    otp: number;
}

export const generateCodeRequestSchema = z.object({
    name: z.string().min(3).max(25),
    password: z.string().min(5),
});

export type IGenerateCodeRequest = z.infer<typeof generateCodeRequestSchema>;

export const loginRequestSchema = z.object({
    name: z.string().min(3).max(25),
    otp: z.number(),
});

export type ILoginRequest = z.infer<typeof loginRequestSchema>;
