import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type {
  CreateMediaInput,
  MediaData,
  MediaView,
} from "@/modules/media/types";
import { generateMediaSlug } from "@/modules/media/utils";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaView | null> {
  const mediaType = MEDIA_TYPES_REGISTRY[input.mediaTypeCode];
  if (!mediaType) return null;

  const releaseDate = new Date(input.releaseDate);
  const releaseYear = releaseDate.getFullYear();
  const slug = generateMediaSlug(input.title, releaseYear);
  const path = `/${mediaType.slug}/${slug}`;

  const mediaData: MediaData = {
    identifiers: {
      slug,
      path,
    },

    info: {
      title: input.title,
      translatedTitle: input.translatedTitle,
      releaseYear,
      releaseDate,
      typeCode: mediaType.code,
    },
  };

  console.log(mediaData);
  return null;
}
