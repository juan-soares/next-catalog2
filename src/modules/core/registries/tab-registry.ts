export type TabDefinition = {
  type: string;
  label: string;
  order: number;
};

export const TAB_REGISTRY: Record<string, TabDefinition> = {
  technical: {
    type: "technical",
    label: "Ficha Técnica",
    order: 1,
  },

  gallery: {
    type: "gallery",
    label: "Galeria",
    order: 2,
  },

  downloads: {
    type: "downloads",
    label: "Arquivos",
    order: 3,
  },

  seasons: {
    type: "seasons",
    label: "Conteúdo",
    order: 4,
  },

  episodes: {
    type: "episodes",
    label: "Episódios",
    order: 5,
  },
};
