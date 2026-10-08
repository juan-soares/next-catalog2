import { z } from "zod";
import { MEDIA_TYPE_CODES } from "@/modules/media-type";

const coverSchema = z
  .object({
    name: z.string().min(1, "A capa é obrigatória"),
    type: z.string(),
    size: z.number().positive("A capa é obrigatória"),
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    {
      message: "A capa deve ser JPG, PNG ou WebP",
      path: ["type"],
    },
  );

const trailerSchema = z
  .object({
    name: z.string().min(1, "O trailer é obrigatório"),
    type: z.string(),
    size: z.number().positive("O trailer é obrigatório"),
  })
  .refine((file) => ["video/mp4", "video/webm"].includes(file.type), {
    message: "Formato de trailer inválido",
    path: ["type"],
  });

export const createMediaSchema = z.object({
  title: z.string().trim().min(1, "O título é obrigatório"),
  translatedTitle: z.string().trim(),

  releaseDate: z.iso.date({
    message: "A data de lançamento deve ser válida",
  }),

  typeCode: z.enum(MEDIA_TYPE_CODES),

  synopsis: z.string().trim().min(1, "A sinopse é obrigatória"),

  cover: coverSchema,
  trailer: trailerSchema,

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
