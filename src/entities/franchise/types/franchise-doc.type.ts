import type { HydratedDocument, InferSchemaType } from "mongoose";
import type { AssetDoc } from "@/entities/asset";
import type { FranchiseSchema } from "@/entities/franchise/models";

export type FranchiseDoc = HydratedDocument<
  InferSchemaType<typeof FranchiseSchema>
>;

export type FranchiseDocPopulated = Omit<FranchiseDoc, "logoId"> & {
  logoId: AssetDoc;
};
