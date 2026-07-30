import z from "zod";
import { createMediaItemSchema } from "../schemas";

export type CreateMediaItemInput = z.infer<typeof createMediaItemSchema>;
