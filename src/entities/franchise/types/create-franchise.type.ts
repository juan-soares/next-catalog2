import z from "zod";
import type { Asset } from "@/entities/asset";
import { createFranchiseSchema } from "@/entities/franchise/schemas";

export type CreateFranchiseInput = z.infer<typeof createFranchiseSchema>;

export type CreateFranchiseData = {
  title: string;
  translatedTitle: string;
  logoId: Asset["id"];
  parentFranchiseId: string | null;
};
