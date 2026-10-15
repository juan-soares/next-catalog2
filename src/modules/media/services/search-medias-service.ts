import { MediaDetails } from "@/modules/media/types";

import { MEDIAS_MOCK } from "../consts/mock.const";

export async function searchMedias(term: string): Promise<MediaDetails[]> {
  return MEDIAS_MOCK.filter(
    (media) =>
      media.title.includes(term) || media.translatedTitle.includes(term),
  );
}
