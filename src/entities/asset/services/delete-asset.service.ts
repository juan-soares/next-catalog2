import { requireAdmin } from "@/modules/auth";
import type { Asset } from "@/entities/asset/types";
import { deleteAssetById } from "@/entities/asset/repositories";
import { deleteAssetFile } from "@/entities/asset/services";

export async function deleteAsset(id: string): Promise<Asset | null> {
  await requireAdmin();

  const asset = await deleteAssetById(id);

  if (!asset) {
    return null;
  }

  await deleteAssetFile(asset.url);

  return asset;
}
