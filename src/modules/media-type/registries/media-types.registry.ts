import { animeRegistry } from ".";
import { MediaType } from "../types";

export const mediaTypesRegistry = { animes: animeRegistry } satisfies Record<
  string,
  MediaType
>;
