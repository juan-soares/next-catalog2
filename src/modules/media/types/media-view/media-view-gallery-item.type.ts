import type { MediaViewImage } from "@/modules/media/types/media-view";

export type MediaViewGalleryItem = MediaViewImage & {
  id: string;
};
