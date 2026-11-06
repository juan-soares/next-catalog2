import z from "zod";

export const deleteMediaSchema = z.object({
  id: z.string().min(1, "O id é obrigatório."),
  typeSlug: z.string().min(1, "O caminho é obrigatório."),
});
