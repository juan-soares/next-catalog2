import { getMediaTypeConfigBySlug, MediaTypeKey } from "@/modules/media-type";
import { MediaItemDetails } from "../types";
import { findMediaItemByTypeAndSlug } from "./find-media-item-by-type-and-slug.repository";
import { notFound } from "next/navigation";

export async function getMediaItemDetails(
  mediaItemSlug: string,
  mediaTypeKey: MediaTypeKey,
): Promise<MediaItemDetails> {
  const mediaItem = await findMediaItemByTypeAndSlug(
    mediaTypeKey,
    mediaItemSlug,
  );
  if (!mediaItem) {
    notFound();
  }

  const { label: mediaTypeLabel } = getMediaTypeConfigBySlug(mediaTypeKey);

  return {
    trailer: mediaItem.trailer,
    slug: mediaItem.slug,
    cover: mediaItem.cover,
    title: mediaItem.title,
    translatedTitle: mediaItem.translatedTitle,
    releaseYear: mediaItem.releaseDate.getFullYear().toString(),
    mediaType: { label: mediaTypeLabel, slug: mediaTypeKey },
    themes: mediaItem.themes,
    synopsis: mediaItem.synopsis,
    acquired: mediaItem.acquired,
    complete: mediaItem.complete,
    characters: mediaItem.characters,
  };
}
