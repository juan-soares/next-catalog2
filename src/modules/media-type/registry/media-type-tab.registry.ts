import {
  MediaItemTabChronology,
  MediaItemTabFiles,
  MediaItemTabFranchises,
  MediaItemTabGallery,
  MediaItemTabGeneralInfo,
  MediaItemTabOvas,
  MediaItemTabSeasons,
  MediaItemTabSpecials,
  MediaItemTabVolumes,
} from "@/modules/1-media-item";
import { MediaTypeTab, MediaTypeTabKey } from "../types";

export const MEDIA_TYPE_TABS = {
  generalInfo: {
    label: "Ficha Técnica",
    tab: "ficha-tecnica",
    Component: MediaItemTabGeneralInfo,
  },

  seasons: {
    label: "Temporadas",
    tab: "temporadas",
    Component: MediaItemTabSeasons,
  },

  ovas: {
    label: "OVAS",
    tab: "ovas",
    Component: MediaItemTabOvas,
  },

  volumes: {
    label: "Volumes",
    tab: "volumes",
    Component: MediaItemTabVolumes,
  },

  specials: {
    label: "Especiais",
    tab: "especiais",
    Component: MediaItemTabSpecials,
  },

  gallery: {
    label: "Galeria",
    tab: "galeria",
    Component: MediaItemTabGallery,
  },

  files: {
    label: "Arquivos",
    tab: "arquivos",
    Component: MediaItemTabFiles,
  },

  chronology: {
    label: "Cronologia",
    tab: "cronologia",
    Component: MediaItemTabChronology,
  },

  franchises: {
    label: "Franquias",
    tab: "franquias",
    Component: MediaItemTabFranchises,
  },
} satisfies Record<MediaTypeTabKey, MediaTypeTab>;
