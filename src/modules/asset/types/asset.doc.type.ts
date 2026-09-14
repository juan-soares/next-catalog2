import { HydratedDocument, InferSchemaType } from "mongoose";
import type { AssetSchema } from "@/modules/asset/models";

export type AssetDoc = HydratedDocument<InferSchemaType<typeof AssetSchema>>;
