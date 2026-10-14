import { MediaDetails } from "@/modules/media/types";
import { MEDIAS_MOCK } from "../consts/mock.const";

export async function getMediaDetailsBySlug(
  slug: string,
): Promise<MediaDetails | null> {
  return MEDIAS_MOCK.find((media) => media.slug === slug) || null;
}
