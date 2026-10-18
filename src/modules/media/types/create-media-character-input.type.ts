import z from "zod";
import { createMediaCharacterSchema } from "@/modules/media/schemas";

export type CreateMediaCharacterInput = z.infer<
  typeof createMediaCharacterSchema
>;
