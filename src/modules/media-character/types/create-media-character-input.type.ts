import z from "zod";
import { createMediaCharacterSchema } from "@/modules/media-character/schema";

export type CreateMediaCharacterInput = z.infer<
  typeof createMediaCharacterSchema
>;
