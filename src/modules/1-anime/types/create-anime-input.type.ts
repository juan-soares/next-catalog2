import { z } from "zod";
import { createAnimeSchema } from "../schemas";

export type CreateAnimeInput = z.infer<typeof createAnimeSchema>;
