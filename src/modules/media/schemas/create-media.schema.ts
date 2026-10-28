import { z } from "zod";
import { createMediaCharacterSchema } from "@/modules/media-character/schema";
import { createMediaFileSchema } from "@/modules/media-file/schemas";
import { MEDIA_TYPES_CODE_LIST } from "@/modules/media-type/consts";

export const createMediaSchema = z.object({
  typeCode: z.enum(MEDIA_TYPES_CODE_LIST),

  title: z.string().trim().min(1, "O título é obrigatório"),
  translatedTitle: z.string().trim().optional(),
  releaseDate: z.iso.date("Informe uma data válida"),
  synopsis: z.string().trim().min(1, "A sinopse é obrigatória"),

  languages: z.array(z.string()).min(1, "Selecione pelo menos um idioma"),
  themes: z.array(z.string()).min(1, "Selecione pelo menos uma temática"),

  cover: z
    .file()
    .min(1, "A capa não pode estar vazia.")
    .mime(["image/jpeg"], "A capa deve ser uma imagem JPEG.")
    .nullable(),
  trailer: z
    .file()
    .mime(["video/mp4"], "O trailer deve ser um vídeo MP4.")
    .optional(),

  characters: z.array(createMediaCharacterSchema),

  sequel: z.string().optional(),

  gallery: z
    .array(
      z
        .file()
        .min(1, "A imagem não pode estar vazia.")
        .mime(["image/jpeg"], "As imagens da galeria devem ser JPEG."),
    )
    .optional(),
  files: z.array(createMediaFileSchema),

  franchise: z.string().trim().min(1, "Selecione uma franquia."),
});
