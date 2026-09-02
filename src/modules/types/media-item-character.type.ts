import { MediaImage } from "./media-image.type";

export type MediaItemCharacterStatusKey =
  | "alive"
  | "dead"
  | "unknown"
  | "missing";

export const MediaItemCharacterStatus = {
  alive: "Vivo",
  dead: "Morto",
  unknown: "Desconhecido",
  missing: "Desaparecido",
} satisfies Record<MediaItemCharacterStatusKey, string>;

export type MediaItemCharacter = {
  id: string;

  mediaItemId: string;
  characterId: string;

  codeName?: string;
  status: MediaItemCharacterStatusKey;
  image?: MediaImage;

  createdAt: Date;
  updatedAt: Date;
};
