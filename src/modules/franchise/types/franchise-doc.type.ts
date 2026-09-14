import type { HydratedDocument, InferSchemaType } from "mongoose";
import type { AssetDoc } from "@/modules/asset";
import type { FranchiseSchema } from "@/modules/franchise/models";

export type FranchiseDoc = HydratedDocument<
  InferSchemaType<typeof FranchiseSchema>
>;

export type FranchiseDocPopulated = Omit<FranchiseDoc, "logoId"> & {
  logoId: AssetDoc;
};
