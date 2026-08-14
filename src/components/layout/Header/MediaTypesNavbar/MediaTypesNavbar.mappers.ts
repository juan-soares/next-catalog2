
import { MediaTypeInfo } from "@/modules/media-type";
import { MediaTypeLink } from "./MediaTypesNavbar.types";
import { MEDIA_TYPE_CATALOG_PATH } from "@/consts/paths";

export function mapMediaTypeInfoToMediaTypeLink(
  mediaTypeInfo: MediaTypeInfo,
): MediaTypeLink {
  return {
    label: mediaTypeInfo.label,
    href: MEDIA_TYPE_CATALOG_PATH + mediaTypeInfo.slug,
  };
}
