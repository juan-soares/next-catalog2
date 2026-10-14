import { MediaTab, MediaTabCode } from "@/modules/media-tab/types";
import {
  MediaTabInfo,
  MediaTabSeasons,
  MediaTabOvas,
  MediaTabSequel,
  MediaTabVolumes,
  MediaTabAlbums,
  MediaTabConcerts,
  MediaTabSpecials,
  MediaTabGallery,
  MediaTabFiles,
  MediaTabFranchises,
  MediaTabGameEditions,
} from "@/modules/media-tab/components";

export const MEDIA_TABS_REGISTRY = {
  info: {
    label: "Detalhes",
    code: "info",
    slug: "info",
    component: MediaTabInfo,
  },
  season: {
    label: "Temporadas",
    code: "season",
    slug: "temporadas",
    component: MediaTabSeasons,
  },
  ova: {
    label: "OVAS",
    code: "ova",
    slug: "ovas",
    component: MediaTabOvas,
  },
  volume: {
    label: "Volumes",
    code: "volume",
    slug: "volumes",
    component: MediaTabVolumes,
  },
  album: {
    label: "Álbuns",
    code: "album",
    slug: "albuns",
    component: MediaTabAlbums,
  },
  concert: {
    label: "Shows",
    code: "concert",
    slug: "shows",
    component: MediaTabConcerts,
  },
  special: {
    label: "Especiais",
    code: "special",
    slug: "especiais",
    component: MediaTabSpecials,
  },
  gameEdition: {
    label: "Edições",
    code: "gameEdition",
    slug: "expansoes",
    component: MediaTabGameEditions,
  },

  gallery: {
    label: "Galeria",
    code: "gallery",
    slug: "galeria",
    component: MediaTabGallery,
  },
  files: {
    label: "Arquivos",
    code: "files",
    slug: "arquivos",
    component: MediaTabFiles,
  },
  franchises: {
    label: "Franquias",
    code: "franchises",
    slug: "franquias",
    component: MediaTabFranchises,
  },
  sequel: {
    label: "Sequência",
    code: "sequel",
    slug: "sequencia",
    component: MediaTabSequel,
  },
} satisfies Record<MediaTabCode, MediaTab>;
