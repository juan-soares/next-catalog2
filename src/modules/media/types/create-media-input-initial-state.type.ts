import { CreateMediaCharacterInput } from "@/modules/media-character/types";
import type { CreateMediaFileInputState } from "@/modules/media-file/types";

export type CreateMediaInitialInputState = {
  title: string;
  typeCode: string;
  translatedTitle: string;
  releaseDate: string;
  synopsis: string;
  languages: string[];
  themes: string[];
  franchise: string;
  cover: null;
  files: CreateMediaFileInputState[];
  characters: CreateMediaCharacterInput[];
};
