import type { CreateMediaInputState } from "@/modules/media/types";

export const CREATE_MEDIA_INPUT_INITIAL_STATE: CreateMediaInputState = {
  title: "",
  translatedTitle: "",
  releaseDate: "",
  mediaTypeCode: null,
  synopsis: "",

  cover: null,
  trailer: null,

  languageIds: [],
  themeIds: [],
  platformIds: [],
  genreIds: [],
  gameplayIds: [],
  modeIds: [],
  playersMin: 1,
  playersMax: 1,
  franchiseId: "",

  progress: {
    acquired: false,
    consumed: false,
  },
};
