import { z } from "zod";
import { CHARACTER_STATUS } from "../consts";
import { MEDIA_TYPE_KEYS } from "@/modules/media-type";

const characterSchema = z.object({
  name: z.string().trim().min(1, "Informe o nome do personagem."),

  nickname: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),

  image: z.string().trim().min(1, "Informe a imagem do personagem."),

  status: z.enum(CHARACTER_STATUS),
});

const booleanFromForm = z.preprocess((value) => value === "true", z.boolean());

export const createMediaItemSchema = z.object({
  mediaType: z.enum(MEDIA_TYPE_KEYS),

  title: z.string().trim().min(1, "Informe um título."),

  translatedTitle: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),

  releaseDate: z.coerce.date(),

  synopsis: z.string().trim().min(1, "Informe uma sinopse."),

  cover: z.string().trim().min(1, "Informe a capa."),

  trailer: z.string().trim().min(1, "Informe o trailer."),

  languageIds: z
    .array(z.string().trim())
    .min(1, "Selecione ao menos um idioma."),
  themeIds: z
    .array(z.string().trim())
    .min(1, "Selecione ao menos uma temática."),

  franchises: z.array(z.string().trim()).default([]),

  acquired: booleanFromForm,

  complete: booleanFromForm,

  characters: z.array(characterSchema).default([]),
});
