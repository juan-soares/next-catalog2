import { z } from "zod";

export const createMediaItemSchema = z.object({
  title: z.string().trim().min(1, "Informe um título."),
  translatedTitle: z.preprocess(
    (value) => (value === "" || value === null ? undefined : value),
    z.string().trim().optional(),
  ),

  cover: z.string().trim(),

  releaseDate: z.coerce.date(),
});
