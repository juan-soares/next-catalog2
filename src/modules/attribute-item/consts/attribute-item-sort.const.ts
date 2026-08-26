export const ATTRIBUTE_ITEM_SORT = {
  LABEL: {
    ASC: {
      ORDER: "label-asc",
      LABEL: "A→Z",
    },
    DESC: {
      ORDER: "label-desc",
      LABEL: "Z→A",
    },
  },

  CREATED_AT: {
    ASC: {
      ORDER: "createdAt-asc",
      LABEL: "Criados antigamente",
    },
    DESC: {
      ORDER: "createdAt-desc",
      LABEL: "Criados recentemente",
    },
  },

  UPDATED_AT: {
    ASC: {
      ORDER: "updatedAt-asc",
      LABEL: "Atualizados antigamente",
    },
    DESC: {
      ORDER: "updatedAt-desc",
      LABEL: "Atualizados recentemente",
    },
  },
} as const;

export const ATTRIBUTE_ITEM_SORT_OPTIONS_LIST = [
  ATTRIBUTE_ITEM_SORT.LABEL.ASC,
  ATTRIBUTE_ITEM_SORT.LABEL.DESC,
  ATTRIBUTE_ITEM_SORT.CREATED_AT.DESC,
  ATTRIBUTE_ITEM_SORT.CREATED_AT.ASC,
  ATTRIBUTE_ITEM_SORT.UPDATED_AT.DESC,
  ATTRIBUTE_ITEM_SORT.UPDATED_AT.ASC,
];
