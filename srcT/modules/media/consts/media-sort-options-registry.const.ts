import type {
  MediaSortOption,
  MediaSortOptionKey,
} from "@/modules/media/types";

export const MEDIA_SORT_OPTIONS_REGISTRY = {
  "title-asc": {
    code: "title-asc",
    label: "Título: A–Z",
    sortBy: "title",
    order: "asc",
  },
  "title-desc": {
    code: "title-desc",
    label: "Título: Z–A",
    sortBy: "title",
    order: "desc",
  },

  "modified-asc": {
    code: "modified-asc",
    label: "Atualizado: Recente–Antigo",
    sortBy: "updatedAt",
    order: "asc",
  },
  "modified-desc": {
    code: "modified-desc",
    label: "Atualizado: Antigo-Recente",
    sortBy: "updatedAt",
    order: "desc",
  },

  "created-asc": {
    code: "created-asc",
    label: "Criado: Recente–Antigo",
    sortBy: "createdAt",
    order: "asc",
  },
  "created-desc": {
    code: "created-desc",
    label: "Criado: Antigo–Recente",
    sortBy: "createdAt",
    order: "desc",
  },
} satisfies Record<MediaSortOptionKey, MediaSortOption>;
