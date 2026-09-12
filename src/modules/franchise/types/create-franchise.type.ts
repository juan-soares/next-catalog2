import z from "zod";
import type { Asset } from "@/modules/asset";
import { createFranchiseSchema } from "@/modules/franchise/schemas";

export type CreateFranchiseInput = z.infer<typeof createFranchiseSchema>;

export type CreateFranchiseData = {
  title: string;
  translatedTitle?: string;
  logo: Asset["id"];
  parentFranchiseId: string | null;
};
