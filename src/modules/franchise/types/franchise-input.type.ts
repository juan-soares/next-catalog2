import z from "zod";
import { createFranchiseSchema } from "@/modules/franchise/schemas";

export type FranchiseInput = z.infer<typeof createFranchiseSchema>;
