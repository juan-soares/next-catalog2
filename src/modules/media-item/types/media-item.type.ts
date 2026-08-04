import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemCharacter } from "./media-item-character.type";

export type MediaItem = {
  title: string;
  translatedTitle?: string;

  slug: string;
  mediaType: MediaTypeKey;

  releaseDate: Date;

  languages: string[];
  synopsis: string;

  cover: string;
  trailer: string;

  themes: string[];
  franchises: string[];

  acquired: boolean;
  complete: boolean;

  characters: MediaItemCharacter[];
};
