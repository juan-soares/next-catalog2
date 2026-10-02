import { z } from "zod";
import { MEDIA_TYPE_CODES } from "@/modules/media-type";

export const createMediaSchema = z.object({
  title: z.string().trim().min(1, "O título é obrigatório"),
  translatedTitle: z.string().trim(),

  releaseDate: z.iso.date({
    message: "A data de lançamento deve ser válida",
  }),

  typeCode: z.enum(MEDIA_TYPE_CODES),

  synopsis: z.string().trim().min(1, "A sinopse é obrigatória"),

  nextId: z
    .string()
    .regex(/^[a-f\d]{24}$/i, "ID de mídia inválido")
    .or(z.literal(""))
    .default(""),

  themeIds: z
    .array(z.string().regex(/^[a-f\d]{24}$/i, "ID de tema inválido"))
    .default([]),
  franchiseId: z
    .string()
    .regex(/^[a-f\d]{24}$/i, "ID de franchise inválido")
    .or(z.literal(""))
    .default(""),
});
