import { HydratedDocument, InferSchemaType } from "mongoose";
import type { AssetSchema } from "@/entities/asset/models";

export type AssetDoc = HydratedDocument<InferSchemaType<typeof AssetSchema>>;
