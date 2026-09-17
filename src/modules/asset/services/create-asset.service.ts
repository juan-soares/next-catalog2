import path from "node:path";
import { requireAdmin } from "@/modules/auth";
import type { Asset, CreateAssetInput } from "@/modules/asset/types";
import { createAssetDoc } from "@/modules/asset/repositories";
import { createAssetFile } from "@/modules/asset/services";

export async function createAsset(input: CreateAssetInput): Promise<Asset> {
  await requireAdmin();

  const { file } = input;

  const extension = path.extname(file.name).toLowerCase();

  const { fileName, url } = await createAssetFile(input);

  return createAssetDoc({
    title: input.title,
    fileName,
    url,
    extension,
    mimeType: file.type,
    size: file.size,
  });
}
