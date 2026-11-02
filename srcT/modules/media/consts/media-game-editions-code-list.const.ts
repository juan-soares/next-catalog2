import type { MediaGameEditionCode } from "@/modules/media/types";
import { MEDIA_GAME_EDITIONS_REGISTRY } from "@/modules/media/consts";

export const MEDIA_GAME_EDITIONS_CODE_LIST: MediaGameEditionCode[] =
  Object.values(MEDIA_GAME_EDITIONS_REGISTRY).map(({ code }) => code);
