import z from "zod";

export const createMediaCharacterSchema = z.object({
  codenames: z.string().trim(),
  name: z.string().trim().min(1, "O nome é obrigatório."),
  status: z.string().trim().min(1, "O status é obrigatório."),
  hasImage: z.boolean(),
});
