import { MediaTypeInfo } from "../types";
import { getMediaTypesInfo } from "./get-media-types-info.service";

export function getMediaTypeInfoBySlug(slug: string): MediaTypeInfo | null {
  return getMediaTypesInfo().find((info) => info.slug === slug) ?? null;
}
