import { z } from "zod";
import { MEDIA_TYPE_KEYS } from "@/modules/media-type";

export const createMediaItemSchema = z.object({
  mediaType: z.enum(MEDIA_TYPE_KEYS),

  title: z.string().trim().min(1, "Informe um título."),
  translatedTitle: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),

  cover: z.string().trim(),

  releaseDate: z.coerce.date(),
});
