import type { MediaView, MediaViewEpisodicFamily } from "@/modules/media/types";

export function isEpisodicMedia(
  media: MediaView,
): media is MediaViewEpisodicFamily {
  return ["anime", "series", "cartoon"].includes(media.categoryCode);
}
