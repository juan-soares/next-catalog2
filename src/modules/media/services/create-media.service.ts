"use server";

import { createAsset } from "@/modules/asset/services";
import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type {
  CreateMediaInput,
  MediaData,
  MediaView,
} from "@/modules/media/types";
import { generateMediaSlug } from "@/modules/media/utils";
import { mediaRepository } from "@/modules/media/repository";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaView | null> {
  const mediaType = MEDIA_TYPES_REGISTRY[input.mediaTypeCode];
  if (!mediaType) return null;

  const releaseDate = new Date(input.releaseDate);
  const releaseYear = releaseDate.getFullYear();
  const slug = generateMediaSlug(input.title, releaseYear);
  const path = `/${mediaType.slug}/${slug}`;

  const cover = await createAsset({
    fileAlias: "cover",
    label: `Capa da mídia ${input.title}.`,
    identifier: "MEDIA",
    folder: slug,
    file: input.cover,
  });
  const trailer = input.trailer
    ? await createAsset({
        fileAlias: "trailer",
        label: `Trailer da mídia ${input.title}.`,
        identifier: "MEDIA",
        folder: slug,
        file: input.trailer,
      })
    : null;

  const mediaData: MediaData = {
    identifiers: {
      slug,
      path,
    },

    info: {
      title: input.title,
      translatedTitle: input.translatedTitle,
      releaseDate,
      typeCode: mediaType.code,
      synopsis: input.synopsis,
    },

    attributes: {
      languageIds: input.languageIds,
      themeIds: input.themeIds,
      franchiseId: input.franchiseId,
    },

    assets: {
      cover,
      trailer,
    },

    progress: input.progress,
  };

  return mediaRepository.createOne(mediaData);
}
