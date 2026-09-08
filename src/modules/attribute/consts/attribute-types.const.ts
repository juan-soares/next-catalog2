import { AttributeType, AttributeTypeCode } from "../types";

export const ATTRIBUTE_TYPES = {
  language: {
    code: "language",
    label: "Idiomas",
    slug: "idiomas",
  },
  theme: {
    code: "theme",
    label: "Temas",
    slug: "temas",
  },
  genre: {
    code: "genre",
    label: "Gêneros",
    slug: "generos",
  },

  platform: {
    code: "platform",
    label: "Plataformas",
    slug: "plataformas",
  },
  gameplayStyle: {
    code: "gameplayStyle",
    label: "Gameplay",
    slug: "gameplay",
  },
  edition: {
    code: "edition",
    label: "Edições",
    slug: "edicao",
  },
  characterStatus: {
    code: "characterStatus",
    label: "Status de Personagem",
    slug: "status-personagem",
  },
  universeType: {
    code: "universeType",
    label: "Tipo de Universo",
    slug: "tipo-universo",
  },
} satisfies Record<AttributeTypeCode, AttributeType>;

export const ATTRIBUTE_TYPE_CODES = Object.keys(
  ATTRIBUTE_TYPES,
) as AttributeTypeCode[];

export const ATTRIBUTE_TYPES_LIST = Object.values(ATTRIBUTE_TYPES);
