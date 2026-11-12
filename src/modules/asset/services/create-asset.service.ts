import path from "node:path";
import { PATHS } from "@/shared/consts";
import type { AssetData } from "@/modules/asset/types";
import { storeFile } from "@/modules/asset/services";

type Props = {
  fileAlias: string;
  label: string;
  identifier: "MEDIA" | "FRANCHISE";
  folder: string;
  file: File;
};

export async function createAsset({
  fileAlias,
  label,
  identifier,
  folder,
  file,
}: Props): Promise<AssetData> {
  const extension = path.extname(file.name);
  const filename = `${fileAlias}${extension}`;

  const basePath = PATHS[identifier].ASSETS;
  const storagePath = path.join(basePath, folder);

  await storeFile({ storagePath, filename, file });

  return {
    filename,
    label,
    mimeType: file.type,
    size: file.size,
  };
}
