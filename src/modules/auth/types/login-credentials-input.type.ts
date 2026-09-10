import z from "zod";
import { loginSchema } from "@/modules/auth/schemas";

export type LoginCredentialsInput = z.infer<typeof loginSchema>;
