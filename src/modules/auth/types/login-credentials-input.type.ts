import z from "zod";
import { loginSchema } from "../schemas";


export type LoginCredentialsInput = z.infer<typeof loginSchema>;
