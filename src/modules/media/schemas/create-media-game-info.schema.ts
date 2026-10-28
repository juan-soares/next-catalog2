import { z } from "zod";

export const gameInfoSchema = z
  .object({
    platforms: z.array(z.string()),
    genres: z.array(z.string()),
    gameplay: z.string(),
    modes: z.array(z.string()),

    players: z.object({
      min: z.number().int().min(1),
      max: z.number().int().min(1),
    }),
  })
  .refine(({ players }) => players.max >= players.min, {
    message: "O máximo de participantes deve ser maior ou igual ao mínimo.",
    path: ["players", "max"],
  });
