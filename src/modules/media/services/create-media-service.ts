import type { CreateMediaInput, MediaDetails } from "@/modules/media/types";
import { createOneMedia } from "@/modules/media/repositories";
import {
  generateMediaPublicId,
  generateMediaSlug,
} from "@/modules/media/utils";
import { filterValidAttributeIds } from "@/modules/attribute";

export async function createMedia(
  input: CreateMediaInput,
): Promise<MediaDetails> {
  const releaseDate = new Date(`${input.releaseDate}T00:00:00.000Z`);
  const releaseYear = Number(input.releaseDate.slice(0, 4));
  const publicID = generateMediaPublicId();

  const themeIds = await filterValidAttributeIds(input.themeIds, "theme");

  return createOneMedia({
    ...input,
    releaseDate,
    releaseYear,
    publicID,
    themeIds,
  });
}
