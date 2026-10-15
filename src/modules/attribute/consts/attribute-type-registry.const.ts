import { AttributeType, AttributeTypeCode } from "@/modules/attribute/types";

export const ATTRIBUTE_TYPE_REGISTRY = {
  language: {
    code: "language",
    label: "Idiomas",
    field: "languages",
  },

  resolution: {
    code: "resolution",
    label: "Resoluções",
    field: "resolutions",
  },

  theme: {
    code: "theme",
    label: "Temáticas",
    field: "themes",
  },

  franchise: {
    code: "franchise",
    label: "Franquias",
    field: "franchises",
  },

  platform: {
    code: "platform",
    label: "Plataformas",
    field: "platforms",
  },

  genre: {
    code: "genre",
    label: "Gêneros",
    field: "genres",
  },

  gameplay: {
    code: "gameplay",
    label: "Gameplays",
    field: "gameplays",
  },

  mode: {
    code: "mode",
    label: "Modes",
    field: "modes",
  },
} satisfies Record<AttributeTypeCode, AttributeType>;
