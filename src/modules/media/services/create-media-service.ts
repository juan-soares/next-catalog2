import "server-only";

import { MEDIA_STORAGE } from "@/shared/consts";
import { filterValidAttributeIds } from "@/modules/attribute";
import { createAsset } from "@/modules/asset";
import type { CreateMediaInput, MediaDetails } from "@/modules/media/types";
import { createOneMedia } from "@/modules/media/repositories";
import { generateMediaPublicId } from "@/modules/media/utils";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaDetails> {
  const releaseDate = new Date(`${input.releaseDate}T00:00:00.000Z`);
  const releaseYear = Number(input.releaseDate.slice(0, 4));
  const publicID = generateMediaPublicId();

  const cover = await createAsset({
    file: input.cover,
    module: "media-cover",
    storage: MEDIA_STORAGE.COVER,
    title: input.title,
  });

  const trailer = await createAsset({
    file: input.trailer,
    module: "media-trailer",
    storage: MEDIA_STORAGE.TRAILER,
    title: input.title,
  });

  const themeIds = await filterValidAttributeIds(input.themeIds, "theme");

  return createOneMedia({
    ...input,
    releaseDate,
    releaseYear,
    publicID,
    themeIds,
    coverAssetId: cover.id,
    trailerAssetId: cover.id,
  });
}
