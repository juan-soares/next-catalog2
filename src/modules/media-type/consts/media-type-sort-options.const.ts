export const MEDIA_TYPE_SORT_OPTIONS = [
  {
    label: "A - Z",
    field: "title",
    direction: "asc",
  },
  {
    label: "Z - A",
    field: "title",
    direction: "desc",
  },
  {
    label: "Mais recentes",
    field: "createdAt",
    direction: "desc",
  },
  {
    label: "Mais antigas",
    field: "createdAt",
    direction: "asc",
  },
  {
    label: "Modificados recentemente",
    field: "updatedAt",
    direction: "desc",
  },
  {
    label: "Modificados há mais tempo",
    field: "updatedAt",
    direction: "asc",
  },
] as const;
