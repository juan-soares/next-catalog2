import type { CreateMediaCharacterInput } from "@/modules/media-character/types";
import type { CreateMediaFileInputState } from "@/modules/media-file/types";
import type { CreateMediaGameInfoInput } from "@/modules/media/types";

export type CreateMediaInitialInputState = {
  title: string;
  typeCode: string;
  translatedTitle: string;
  releaseDate: string;
  synopsis: string;
  languages: string[];
  themes: string[];
  gameInfo?: CreateMediaGameInfoInput;
  franchise: string;
  cover: null;
  files: CreateMediaFileInputState[];
  characters: CreateMediaCharacterInput[];
};
