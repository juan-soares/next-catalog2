import { MEDIA_VIEW_MOCK } from "@/app/mocks";
import type { MediaView } from "@/modules/media/types";

export async function getMediaViewBySlug(
  slug: string,
): Promise<MediaView | null> {
  return MEDIA_VIEW_MOCK.find((media) => media.slug === slug) ?? null;
}
