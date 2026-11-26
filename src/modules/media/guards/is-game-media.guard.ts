import type { MediaView, MediaViewGameFamily } from "@/modules/media/types";

export function isGameMedia(media: MediaView): media is MediaViewGameFamily {
  return ["video-game", "board-game"].includes(media.categoryCode);
}
