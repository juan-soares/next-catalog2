import type { MediaImageView } from "@/modules/media/types";

//Personagens, codinomes, imagem e status.
export type MediaCharacterView = {
  name: string;
  codenames: string[];
  image: MediaImageView;
  status: { label: string };
};
