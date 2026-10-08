import "server-only";

import { connectToDatabase } from "@/shared/libs/mongoose";
import type { Asset, CreateAssetData } from "@/entities/asset/types";
import { AssetModel } from "@/entities/asset/models";
import { mapAssetDocToAsset } from "@/entities/asset/mappers";

export async function createAssetDoc(data: CreateAssetData): Promise<Asset> {
  await connectToDatabase();

  const assetDoc = await AssetModel.create(data);

  return mapAssetDocToAsset(assetDoc);
}
