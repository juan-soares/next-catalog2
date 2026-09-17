import { Asset, AssetDoc } from "@/modules/asset/types";

export function mapAssetDocToAsset(assetDoc: AssetDoc): Asset {
  return {
    id: assetDoc._id.toString(),
    title: assetDoc.title,
    fileName: assetDoc.fileName,
    extension: assetDoc.extension,
    mimeType: assetDoc.mimeType,
    size: assetDoc.size,
    url: assetDoc.url,
  };
}
