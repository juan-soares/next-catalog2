import { MediaTypeInfo } from "@/modules/media-type";
import { MediaTypeCatalogInfo } from "../types";

export function mapMediaTypeInfoToMediaTypeCatalogInfo(
  mediaTypeInfo: MediaTypeInfo,

): MediaTypeCatalogInfo {


  return {
    title: mediaTypeInfo.label,
    filters: []
  };
}
