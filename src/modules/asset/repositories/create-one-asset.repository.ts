import { connectToDatabase } from "@/shared/libs/mongoose";
import type { Asset, CreateAssetData } from "@/modules/asset/types";
import { AssetModel } from "@/modules/asset/models";
import { mapAssetDocToAsset } from "@/modules/asset/mappers";

export async function createOneAsset(data: CreateAssetData): Promise<Asset> {
  await connectToDatabase();
  const assetDoc = await AssetModel.create(data);

  return mapAssetDocToAsset(assetDoc);
}
