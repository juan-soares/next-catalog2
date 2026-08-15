import { AttributeTypeDefinition } from "../types";

export const ATTRIBUTE_TYPES = {
  language: {
    label: "Idiomas",
    slug: "idiomas",
  },

  theme: {
    label: "Temas",
    slug: "temas",
  },

  genre: {
    label: "Gêneros",
    slug: "generos",
  },
} satisfies Record<string, AttributeTypeDefinition>;
