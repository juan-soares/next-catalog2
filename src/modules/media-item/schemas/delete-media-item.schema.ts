import { MEDIA_TYPE_KEYS } from "@/modules/media-type";
import { z } from "zod";

export const deleteMediaItemSchema = z.object({
  mediaType: z.enum(MEDIA_TYPE_KEYS),
  slug: z.string().trim().min(1, "Informe o valor."),
});
