import type { MediaCharacterStatus } from "@/modules/media-character/types";

export type MediaCharacter = {
  name: string;
  codenames: string[];
  status: MediaCharacterStatus;
  image: { url: string; alt: string };
};
