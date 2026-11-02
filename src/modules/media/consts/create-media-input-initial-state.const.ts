import type { CreateMediaInputState } from "@/modules/media/types";

export const CREATE_MEDIA_INPUT_INITIAL_STATE: CreateMediaInputState = {
  title: "",
  translatedTitle: "",
  releaseDate: "",
  mediaTypeCode: null,
  cover: null,
  trailer: null,
  progress: {
    acquired: false,
    consumed: false,
  },
};
