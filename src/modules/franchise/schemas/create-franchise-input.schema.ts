import z from "zod";

export const createFranchiseSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  translatedTitle: z.string(),
  logo: z.file(),
  parentFranchiseId: z.string(),
});
