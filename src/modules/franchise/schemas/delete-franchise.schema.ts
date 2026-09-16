import z from "zod";

export const deleteFranchiseSchema = z.object({
  id: z.string().min(1),
});
