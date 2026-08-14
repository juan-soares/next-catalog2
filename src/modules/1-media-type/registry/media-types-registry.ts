import { MediaTypesRegistry } from "../types";
import {
  deleteAnimeAction,
  getAnimeFilters,
  listAnimeCatalogResults,
  NewAnimeForm,
} from "@/modules/1-anime";

export const mediaTypesRegistry = {
  anime: {
    label: "Animes",
    slug: "animes",

    catalog: {
      getFilters: getAnimeFilters,
      getResults: listAnimeCatalogResults,
    },

    admin: {
      NewMediaItemForm: NewAnimeForm,
      deleteAction: deleteAnimeAction,
    },
  },
} satisfies MediaTypesRegistry;
