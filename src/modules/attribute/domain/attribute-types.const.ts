import type { AttributeType, AttributeTypeCode } from "./attribute-type.type";

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
    label: "Estilos",
    slug: "estilos",
  },
  edition: {
    code: "edition",
    label: "Edições",
    slug: "edicao",
  },
  characterStatus: {
    code: "characterStatus",
    label: "Status do Personagem",
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
