import "server-only";

import path from "node:path";
import { unlink } from "node:fs/promises";
import { ClientSession, isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/shared/libs/mongoose";
import { AssetModel } from "@/entities/asset/models";
import type { Asset } from "@/entities/asset/types";
import { mapAssetDocToAsset } from "@/entities/asset/mappers";

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
