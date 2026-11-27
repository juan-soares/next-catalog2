import { MediaView } from "../types";

export const mediasViewMock: MediaView[] = [
  {
    id: "1235",
    slug: "naruto-2020-HeHe",
    url: "/animes/naruto-202-HeHe",

    categoryCode: "anime",
    categoryStructure: "episodic",

    info: {
      title: "Naruto",
      translatedTitle: "",
      release: {
        date: "2020-01-01",
        year: 2020,
      },
      synopsis: "",
      cover: {
        src: "/assets/medias/naruto-2020-HeHe/cover.jpg",
        alt: "Capa do anime Naruto.",
      },
      trailer: {
        src: "/assets/medias/naruto-2020-HeHe/trailer.mp4",
        type: "video/mp4",
      },
    },

    franchises: {
      main: {
        id: "123",
        slug: "naruto-anime-HaHa",
        url: "/franquias/naruto-anime-HaHa",
        title: "Naruto Anime",
        logo: {
          src: "/assets/franchises/naruto-anime-HaHa-logo.png",
          alt: "Logo da franquia Naruto Anime.",
        },
      },
      subs: [],
    },

    attributes: {
      languages: [{ id: "123", label: "Dub" }],
      genres: [{ id: "123", label: "Ação" }],
      themes: [{ id: "123", label: "Ninja" }],
      universes: [{ id: "123", label: "Naruto Anime 2020" }],
    },

    continuity: {
      previous: null,
      next: null,
    },

    gallery: [],

    files: [],

    details: {
      collections: {
        seasons: [],
        ovas: [],
        specials: [],
      },
    },

    status: {
      acquired: false,
      consumed: false,
    },
  },
];
