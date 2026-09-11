import z from "zod";
import { createFranchiseSchema } from "@/modules/franchise/schemas";

export type CreateFranchiseInput = z.infer<typeof createFranchiseSchema>;

export type CreateFranchiseData = {
  title: string;
  translatedTitle?: string;
  logo: string;
  parentFranchiseId: string | null;
};
