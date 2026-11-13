import type {
  AttributeTypeCode,
  AttributeTypeView,
} from "@/modules/attribute/types";

export const ATTRIBUTE_TYPE_REGISTRY = {
  language: {
    code: "language",
    label: "Idiomas",
  },

  theme: {
    code: "theme",
    label: "Temáticas",
  },

  platform: {
    code: "platform",
    label: "Plataformas",
  },

  genre: {
    code: "genre",
    label: "Gêneros",
  },

  gameplay: {
    code: "gameplay",
    label: "Gameplays",
  },

  mode: {
    code: "mode",
    label: "Modos",
  },
} satisfies Record<AttributeTypeCode, AttributeTypeView>;
