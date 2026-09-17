import path from "node:path";
import { unlink } from "node:fs/promises";
import { ClientSession, isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/shared/libs/mongoose";
import { AssetModel } from "@/modules/asset/models";
import type { Asset } from "@/modules/asset/types";
import { mapAssetDocToAsset } from "@/modules/asset/mappers";

export async function deleteAssetById(id: string): Promise<Asset | null> {
  if (!isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const deletedAssetDoc = await AssetModel.findByIdAndDelete(id);

  if (!deletedAssetDoc) {
    return null;
  }

  return mapAssetDocToAsset(deletedAssetDoc);
}
