import type { MediaCharacterStatus } from "@/modules/media-character/types";
import { MEDIA_CHARACTER_STATUS_REGISTRY } from "./media-character-status-registry.const";

export const MEDIA_CHARACTER_STATUS_LIST: MediaCharacterStatus[] =
  Object.values(MEDIA_CHARACTER_STATUS_REGISTRY);
