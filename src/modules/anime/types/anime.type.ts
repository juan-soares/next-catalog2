import { MediaItem } from "@/modules/media-item";

export type Anime = Omit<MediaItem, "mediaType"> & {
  mediaType: "animes";
};
