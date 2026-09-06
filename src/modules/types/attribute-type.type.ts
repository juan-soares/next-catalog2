export type AttributeTypeCode =
  | "language"
  | "theme"
  | "genre"
  | "edition"
  | "platform"
  | "gameplayStyle"
  | "characterStatus"
  | "universeType";

export type AttributeType = {
  code: AttributeTypeCode;
  label: string;
  slug: string;
};

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
