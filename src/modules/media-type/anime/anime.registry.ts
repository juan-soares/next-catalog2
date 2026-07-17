import { MediaType } from "../types";

export const animeRegistry: MediaType = {
  label: "Animes",

  catalog: {
    getItems,
    getFilters,
  },

  admin: {
    createForm: CreateAnimeForm,
    editForm: EditAnimeForm,

    createAction,
    updateAction,
    deleteAction,
  },
};
