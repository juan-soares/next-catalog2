import z from "zod";

export const createMediaFileSchema = z.object({
  name: z.string().trim().min(1, "Informe o título do arquivo"),
  file: z.file(),
});
