import { MediaTypeDefinition } from "../types";

export const MEDIA_TYPES = {
  anime: {
    label: "Animes",
    slug: "animes",
  },
} satisfies Record<string, MediaTypeDefinition>;
