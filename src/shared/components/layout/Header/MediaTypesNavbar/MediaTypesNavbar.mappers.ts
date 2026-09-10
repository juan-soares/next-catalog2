import { MediaTypeInfo } from "@/modules1/media-type";
import { MediaTypeLink } from "./MediaTypesNavbar.types";
import { MEDIA_TYPE_CATALOG_PATH } from "@/shared/consts/paths.const";

export function mapMediaTypeInfoToMediaTypeLink(
  mediaTypeInfo: MediaTypeInfo,
): MediaTypeLink {
  return {
    label: mediaTypeInfo.label,
    href: MEDIA_TYPE_CATALOG_PATH + mediaTypeInfo.slug,
  };
}
