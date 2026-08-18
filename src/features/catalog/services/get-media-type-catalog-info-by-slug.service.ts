import { getMediaTypeInfoBySlug } from "@/modules/media-type";
import { MediaTypeCatalogInfo } from "../types/media-type-catalog-info.view.type";
import { mapMediaTypeInfoToMediaTypeCatalogInfo } from "../mappers";

export async function getMediaTypeCatalogInfoBySlug(
  slug: string,
): Promise<MediaTypeCatalogInfo | null> {
  const mediaTypeInfo = getMediaTypeInfoBySlug(slug);

  if (!mediaTypeInfo) return null;

  return mapMediaTypeInfoToMediaTypeCatalogInfo(mediaTypeInfo);
}
