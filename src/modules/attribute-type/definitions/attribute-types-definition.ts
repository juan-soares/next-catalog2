import { AttributeTypeDefinition } from "../types";

export const ATTRIBUTE_TYPES = {
  language: {
    label: "Idiomas",
    slug: "idiomas",
    fieldName: "languageIds",
  },

  theme: {
    label: "Temas",
    slug: "temas",
    fieldName: "themeIds",
  },

  genre: {
    label: "Gêneros",
    slug: "generos",
    fieldName: "genreIds",
  },
} satisfies Record<string, AttributeTypeDefinition>;
