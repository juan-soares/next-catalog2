import z from "zod";
import { MEDIA_TYPE_CODE_LIST } from "@/modules/media-type/consts";

export const createMediaSchema = z.object({
  title: z.string().min(1, "O título é obrigatório."),
  translatedTitle: z.string(),
  releaseDate: z
    .string()
    .min(1, "A data de lançamento é obrigatória.")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "Data de lançamento inválida.",
    ),
  mediaTypeCode: z.enum(MEDIA_TYPE_CODE_LIST),

  cover: z
    .instanceof(File, { message: "A capa é obrigatória." })
    .refine(
      (file) => file.type === "image/jpeg",
      "A capa deve estar no formato JPEG.",
    ),

  trailer: z
    .instanceof(File)
    .refine(
      (file) => file.type === "video/mp4",
      "O trailer deve estar no formato MP4.",
    )
    .nullable(),

  progress: z.object({
    acquired: z.boolean(),
    consumed: z.boolean(),
  }),
});
