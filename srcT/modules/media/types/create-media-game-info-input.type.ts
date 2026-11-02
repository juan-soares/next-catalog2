import z from "zod";
import { gameInfoSchema } from "@/modules/media/schemas";

export type CreateMediaGameInfoInput = z.infer<typeof gameInfoSchema>;
