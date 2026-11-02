import type { AssetData, AssetTypeCode } from "@/modules/asset/types";
import { ASSET_REGISTRY } from "../consts/asset-type-registry.const";

type Props = {
  parentLabel: string;
  identifier: string;
  type: AssetTypeCode;
  file: File;
};

export function createAsset({
  parentLabel,
  identifier,
  type,
  file,
}: Props): AssetData {
  const extension = file.name.split(".").pop()?.toLowerCase();

  const filename = `${identifier}-${type}.${extension}`;

  return {
    label: `${ASSET_REGISTRY[type].label} ${parentLabel}`,
    filename,
    path: `${ASSET_REGISTRY[type].storage}/${filename}`,
    mimeType: file.type,
    size: file.size,
  };
}
