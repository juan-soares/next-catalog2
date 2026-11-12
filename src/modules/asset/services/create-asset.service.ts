import path from "node:path";
import { PATHS } from "@/shared/consts";
import type { AssetData } from "@/modules/asset/types";
import { storeFile } from "@/modules/asset/services";

type Props = {
  alias: string;
  label: string;
  identifier: "MEDIA" | "FRANCHISE";
  file: File;
};

export async function createAsset({
  alias,
  label,
  identifier,
  file,
}: Props): Promise<AssetData> {
  const extension = path.extname(file.name);
  const filename = `${alias}${extension}`;

  const basePath = PATHS[identifier].ASSETS;

  const storagePath =
    identifier === "MEDIA" ? path.join(basePath, alias) : basePath;

  await storeFile({ storagePath, filename, file });

  return {
    filename,
    label,
    mimeType: file.type,
    size: file.size,
  };
}
