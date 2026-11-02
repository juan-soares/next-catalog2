import { MEDIA_CHARACTER_STATUS_REGISTRY } from "@/modules/media-character/consts";

export const MEDIA_CHARACTER_STATUS_CODE_LIST = Object.values(
  MEDIA_CHARACTER_STATUS_REGISTRY,
).map(({ code }) => code);
