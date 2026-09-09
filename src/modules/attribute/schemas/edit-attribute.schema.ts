import { z } from "zod";

export const editAttributeSchema = z.object({
  id: z.string().trim().min(1),
  label: z.string().trim().min(1),
});
