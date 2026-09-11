import { z } from "zod";

export const createFranchiseSchema = z.object({
  title: z.string().trim().min(1),
  translatedTitle: z.string().trim().optional().or(z.literal("")),
  logo: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Logo é obrigatória."),
  parentFranchiseId: z
    .string()
    .trim()
    .transform((value) => (value === "" ? null : value))
    .nullable(),
});
