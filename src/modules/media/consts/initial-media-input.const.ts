import type { CreateMediaInput } from "@/modules/media/types";

export const INITIAL_MEDIA_INPUT: CreateMediaInput = {
  title: "",
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
