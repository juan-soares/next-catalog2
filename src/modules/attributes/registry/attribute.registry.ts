export type Attributes = keyof typeof attributeRegistry;

export const attributeRegistry = {
  language: {
    key: "language",
    label: "Idiomas",
  },

  genre: {
    key: "genre",
    label: "Gênero",
  },
};
