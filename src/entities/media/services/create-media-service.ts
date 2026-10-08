import "server-only";

import { MEDIA_STORAGE } from "@/shared/consts";
import { filterValidAttributeIds } from "@/modules/attribute";
import { createAsset } from "@/entities/asset";
import type { CreateMediaInput, MediaDetails } from "@/entities/media/types";
import { createOneMedia } from "@/entities/media/repositories";
import { generateMediaPublicId } from "@/entities/media/utils";
import { slugify } from "@/shared/libs/helpers";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaDetails> {
  const releaseDate = new Date(`${input.releaseDate}T00:00:00.000Z`);
  const releaseYear = Number(input.releaseDate.slice(0, 4));

  const publicID = generateMediaPublicId();
  const mediaSlug = slugify(input.title);

  const coverExtension = input.cover.name
    .slice(input.cover.name.lastIndexOf("."))
    .toLowerCase();

  const trailerExtension = input.trailer.name
    .slice(input.trailer.name.lastIndexOf("."))
    .toLowerCase();

  const coverFileName = `media-${mediaSlug}-${releaseYear}-${publicID}-cover${coverExtension}`;
  const trailerFileName = `media-${mediaSlug}-${releaseYear}-${publicID}-trailer${trailerExtension}`;

  const cover = await createAsset({
    title: input.title,
    fileName: coverFileName,
    extension: coverExtension,
    mimeType: input.cover.type,
    size: input.cover.size,
    url: `${MEDIA_STORAGE}/${coverFileName}`,
  });

  const trailer = await createAsset({
    title: input.title,
    fileName: trailerFileName,
    extension: trailerExtension,
    mimeType: input.trailer.type,
    size: input.trailer.size,
    url: `${MEDIA_STORAGE}/${trailerFileName}`,
  });

  const themeIds = await filterValidAttributeIds(input.themeIds, "theme");

  return createOneMedia({
    ...input,
    releaseDate,
    releaseYear,
    publicID,
    themeIds,
    coverAssetId: cover.id,
    trailerAssetId: trailer.id,
  });
}
