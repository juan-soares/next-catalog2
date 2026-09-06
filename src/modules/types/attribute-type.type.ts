export type AttributeTypeCode =
  | "language"
  | "characterStatus"
  | "theme"
  | "genre"
  | "edition"
  | "platform"
  | "gameplayStyle";

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
  characterStatus: {
    code: "characterStatus",
    label: "Status do Personagem",
    slug: "status-do-personagem",
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
} satisfies Record<AttributeTypeCode, AttributeType>;
