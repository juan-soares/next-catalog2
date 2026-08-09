import { AttributeTypeDefinition } from "../types/attribute-type-definition.type";

export const ATTRIBUTE_TYPES = {
  languages: {
    label: "Idiomas",
    fieldName: "languageIds",
  },

  themes: {
    label: "Temas",
    fieldName: "themeIds",
  },
} satisfies Record<string, AttributeTypeDefinition>;
