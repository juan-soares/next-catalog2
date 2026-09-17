import { requireAdmin } from "@/modules/auth";
import type { Asset } from "@/modules/asset/types";
import { deleteAssetById } from "@/modules/asset/repositories";
import { deleteAssetFile } from "@/modules/asset/services";

export async function deleteAsset(id: string): Promise<Asset | null> {
  await requireAdmin();

  const asset = await deleteAssetById(id);

  if (!asset) {
    return null;
  }

  await deleteAssetFile(asset.url);

  return asset;
}
