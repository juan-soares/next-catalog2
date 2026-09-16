import path from "node:path";
import { unlink } from "node:fs/promises";
import { ClientSession, isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/shared/libs/mongoose";
import { AssetModel } from "@/modules/asset/models";
import type { Asset } from "@/modules/asset/types";
import { mapAssetDocToAsset } from "@/modules/asset/mappers";
import { FRANCHISES_LOGO_PATH } from "@/shared/consts";

export async function deleteAssetById(
  id: string,
  session?: ClientSession,
): Promise<Asset | null> {
  if (!isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const deletedAssetDoc = await AssetModel.findByIdAndDelete(id).session(
    session ?? null,
  );

  if (!deletedAssetDoc) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    FRANCHISES_LOGO_PATH + deletedAssetDoc.fileName,
  );

  await unlink(filePath).catch((error: NodeJS.ErrnoException) => {
    if (error.code !== "ENOENT") {
      throw error;
    }
  });

  return mapAssetDocToAsset(deletedAssetDoc);
}
