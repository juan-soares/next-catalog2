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

  languageIds: string[];
  characterIds: string[];
  themeIds: string[];
  franchiseIds?: string[];

  createdAt: Date;
  updatedAt: Date;
};
