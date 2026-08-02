import { z } from "zod";
import { CHARACTER_STATUS } from "../consts";

const characterSchema = z.object({
  name: z.string().trim().min(1, "Informe o nome do personagem."),
  nickname: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),
  image: z.string().trim().min(1, "Informe a imagem do personagem."),
  status: z.enum(CHARACTER_STATUS),
});

export const createMediaItemSchema = z.object({
  title: z.string().trim().min(1, "Informe um título."),

  translatedTitle: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),

  releaseDate: z.coerce.date(),

  synopsis: z.string().trim().min(1, "Informe uma sinopse."),

  cover: z.string().trim().min(1),

  trailer: z.string().trim().min(1),

  themes: z.array(z.string().trim()),

  acquired: z.coerce.boolean(),

  complete: z.coerce.boolean(),

  characters: z.array(characterSchema),
});
