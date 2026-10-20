import { MediaCharacterStatusCode } from "@/modules/media-character/types";

export type CreateMediaCharacterInput = {
  name: string;
  codenames: string;
  statusCode: MediaCharacterStatusCode;
  image: File | null;
};
