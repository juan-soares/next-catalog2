import { MEDIA_VIEW_MOCK } from "@/app/mocks";
import type { MediaView } from "@/modules/media/types";

export async function searchMedias(term: string): Promise<MediaView[]> {
  return MEDIA_VIEW_MOCK.filter(
    (media) =>
      media.title.includes(term) || media.translatedTitle.includes(term),
  );
}
