import { Asset, AssetDocument } from "@/modules/asset/types";

export function mapAssetDocToAsset(assetDoc: AssetDocument): Asset {
  return {
    id: assetDoc._id.toString(),
    title: assetDoc.title,
    fileName: assetDoc.fileName,
    extension: assetDoc.extension,
    mimeType: assetDoc.mimeType,
    size: assetDoc.size,
  };
}
