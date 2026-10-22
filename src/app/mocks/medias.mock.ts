import type { Media } from "@/modules/media/types";

export const MEDIA_MOCK: Media[] = [
  {
    id: "media-001",
    slug: "naruto",
    path: "/animes/naruto",

    title: "Naruto",
    translatedTitle: "Naruto",
    releaseYear: 2002,
    typeCode: "anime",
    synopsis:
      "Naruto Uzumaki é um jovem ninja que sonha em se tornar Hokage e conquistar o reconhecimento de sua vila.",

    languageIds: ["lang-ja", "lang-pt"],
    themeIds: ["theme-action", "theme-adventure", "theme-ninja"],

    cover: {
      url: "https://placehold.co/300x450?text=Naruto",
      alt: "Capa de Naruto",
    },

    trailer: {
      url: "https://example.com/trailers/naruto.mp4",
      fileType: "video/mp4",
    },

    characterIds: ["character-naruto", "character-sasuke"],

    seasonIds: ["season-naruto-01"],
    ovaIds: [],
    specialIds: [],

    previousMediaId: undefined,
    nextMediaId: "media-naruto-shippuden",

    galleryAssetIds: [],

    files: [
      {
        label: "Guia de episódios",
        url: "https://example.com/files/naruto-guide.pdf",
        fileType: ".pdf",
        size: 102400,
      },
    ],

    franchiseIds: ["franchise-naruto"],

    status: {
      acquired: true,
      consumed: false,
    },
  },

  {
    id: "media-002",
    slug: "the-legend-of-zelda-tears-of-the-kingdom",
    path: "/jogos/the-legend-of-zelda-tears-of-the-kingdom",

    title: "The Legend of Zelda: Tears of the Kingdom",
    translatedTitle: "A Lenda de Zelda: Lágrimas do Reino",
    releaseYear: 2023,
    typeCode: "game",
    synopsis:
      "Link explora Hyrule e os céus acima do reino para descobrir a origem de uma nova ameaça.",

    languageIds: ["lang-pt", "lang-en"],
    themeIds: ["theme-adventure", "theme-fantasy"],

    cover: {
      url: "https://placehold.co/300x450?text=Zelda",
      alt: "Capa de The Legend of Zelda: Tears of the Kingdom",
    },

    characterIds: ["character-link", "character-zelda"],

    gameDetails: {
      platformIds: ["platform-switch"],
      genreIds: ["genre-action", "genre-adventure"],
      gameplayId: "open-world",
      modeIds: ["mode-single-player"],
      players: {
        min: 1,
        max: 1,
      },
    },

    gameEdition: {
      baseId: null,
      dlcIds: [],
      expansionIds: [],
    },

    gallery: [
      {
        url: "https://placehold.co/800x450?text=Hyrule",
        alt: "Paisagem de Hyrule",
      },
    ],

    files: [],

    franchiseIds: ["franchise-zelda"],

    status: {
      acquired: true,
      consumed: false,
    },
  },

  {
    id: "media-003",
    slug: "discovery",
    path: "/musicas/discovery",

    title: "Discovery",
    translatedTitle: "",
    releaseYear: 2001,
    typeCode: "music",
    synopsis: "Álbum de música eletrônica da dupla francesa Daft Punk.",

    languageIds: [],
    themeIds: ["theme-electronic-music"],

    cover: {
      url: "https://placehold.co/300x300?text=Discovery",
      alt: "Capa do álbum Discovery",
    },

    characterIds: [],

    albumIds: ["album-discovery"],
    concertIds: [],

    gallery: [],
    files: [],

    franchiseIds: [],

    status: {
      acquired: false,
      consumed: false,
    },
  },
];
