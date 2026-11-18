import type { MediaView } from "@/modules/media/types";

export type MediaCardView = {
  identifiers: Pick<MediaView["identifiers"], "path">;
  info: Pick<MediaView["info"], "title" | "releaseYear">;
  assets: Pick<MediaView["assets"], "cover">;
  progress: MediaView["progress"];
};
