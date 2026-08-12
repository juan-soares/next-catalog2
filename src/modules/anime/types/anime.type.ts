import { MediaItem } from "@/modules/1-media-item";

export type Anime = Omit<MediaItem, "mediaType"> & {
  mediaType: "animes";
};
