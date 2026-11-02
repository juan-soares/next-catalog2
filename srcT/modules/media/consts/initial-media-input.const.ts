import type { CreateMediaInitialInputState } from "@/modules/media/types";

export const INITIAL_MEDIA_INPUT_STATE: CreateMediaInitialInputState = {
  title: "",
  typeCode: "",
  translatedTitle: "",
  releaseDate: "",
  synopsis: "",
  languages: [],
  themes: [],
  franchise: "",
  cover: null,
  files: [],
  characters: [],
};
