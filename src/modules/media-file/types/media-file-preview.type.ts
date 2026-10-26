import type { MediaFileView } from "@/modules/media-file/types";

export type MediaFilePreview = Omit<MediaFileView, "url">;
