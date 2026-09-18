import { MEDIA_TYPE_CODES } from "@/modules/media-type/consts";
import { z } from "zod";

export const createMediaSchema = z.object({
  title: z.string().trim().min(1),
  translatedTitle: z.string().trim().optional().or(z.literal("")),
  cover: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Capa é obrigatória.")
    .refine(
      (file) => file.type === "image/jpg",
      "A capa deve ser um arquivo JPG.",
    ),
  releaseDate: z.coerce.date(),
  type: z.enum(MEDIA_TYPE_CODES),
});
