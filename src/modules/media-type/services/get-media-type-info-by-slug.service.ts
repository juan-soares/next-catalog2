import { notFound } from "next/navigation";
import { MediaTypeInfo } from "../types";
import { getMediaTypesInfo } from "./get-media-types-info.service";

export function getMediaTypeInfoBySlug(slug: string): MediaTypeInfo {
  const mediaTypeInfo = getMediaTypesInfo().find((info) => info.slug === slug);

  if (!mediaTypeInfo) {
    notFound();
  }

  return mediaTypeInfo;
}
