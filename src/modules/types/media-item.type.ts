import { MediaFile } from "./media-file.type";
import { MediaImage } from "./media-image.type";
import { MediaTypeCode } from "./media-type.type";
import { MediaVideo } from "./media-video.type";

export type MediaItem = {
  id: string;
  mediaType: MediaTypeCode;
  slug: string;

  title: string;
  translatedTitle?: string;
  synopsis: string;
  releaseDate: Date;

  medias: {
    cover: MediaImage;
    trailer: MediaVideo;
    files: MediaFile[];
  };

  sequence?: {
    previousId?: string;
    nextId?: string;
  };

  languageIds: string[];
  themeIds: string[];
  franchiseId?: string;

  createdAt: Date;
  updatedAt: Date;
};
