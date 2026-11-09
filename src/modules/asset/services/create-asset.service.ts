import path from "node:path";
import type { AssetData, AssetTypeCode } from "@/modules/asset/types";
import { ASSET_TYPE_REGISTRY } from "@/modules/asset/consts";
import { storeFile } from "@/modules/asset/services";

type Props = {
  parentLabel: string;
  identifier: string;
  type: AssetTypeCode;
  file: File;
};

export async function createAsset({
  parentLabel,
  identifier,
  type,
  file,
}: Props): Promise<AssetData> {
  const filename = path.basename(file.name);
  const storage = ASSET_TYPE_REGISTRY[type].storage;

  await storeFile({ file, filename, identifier, type });

  const publicPath = `/${storage
    .replace(/^public[\\/]/, "")
    .replace(/\\/g, "/")}/${identifier}/${filename}`;

  return {
    label: `${ASSET_TYPE_REGISTRY[type].label} ${parentLabel}`,
    filename,
    path: publicPath,
    mimeType: file.type,
    size: file.size,
  };
}
