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
  const extension = file.name.split(".").pop()?.toLowerCase();

  const filename = `${identifier}-${type}.${extension}`;

  // await storeFile({file,filename,type,});

  return {
    label: `${ASSET_TYPE_REGISTRY[type].label} ${parentLabel}`,
    filename,
    path: `${ASSET_TYPE_REGISTRY[type].storage}/${filename}`,
    mimeType: file.type,
    size: file.size,
  };
}
