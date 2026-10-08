import "server-only";

import { requireAdmin } from "@/modules/auth";
import type { Asset, CreateAssetInput } from "@/entities/asset/types";
import { createAssetDoc } from "@/entities/asset/repositories";

export async function createAsset(input: CreateAssetInput): Promise<Asset> {
  await requireAdmin();

  return createAssetDoc({
    title: input.title,
    fileName: input.fileName,
    extension: input.extension,
    mimeType: input.mimeType,
    size: input.size,
    url: input.url,
  });
}
