import type { MediaView } from "@/modules/media/types";

export const MEDIA_VIEW_MOCK: MediaView[] = [
  {
    id: "media-001",
    slug: "naruto",
    path: "/animes/naruto",
    title: "Naruto",
    translatedTitle: "Naruto",
    releaseYear: 2002,
    type: {
      label: "Anime",
    },
    synopsis:
      "Naruto Uzumaki é um jovem ninja que sonha em se tornar Hokage e conquistar o reconhecimento de sua vila.",
    languages: [{ label: "Japonês" }, { label: "Português" }],
    themes: [{ label: "Ação" }, { label: "Aventura" }, { label: "Ninjas" }],
    cover: {
      url: "/assets/media/300x450?text=Naruto",
      alt: "Capa de Naruto",
    },
    trailer: {
      url: "/assets/media/naruto.mp4",
      fileType: "video/mp4",
    },
    characters: [
      {
        name: "Naruto Uzumaki",
        codenames: ["Ninja número um em surpreender pessoas"],
        image: {
          url: "/assets/media/200x200?text=Naruto",
          alt: "Naruto Uzumaki",
        },
        status: { label: "Principal" },
      },
      {
        name: "Sasuke Uchiha",
        codenames: ["Último sobrevivente do clã Uchiha"],
        image: {
          url: "/assets/media/200x200?text=Sasuke",
          alt: "Sasuke Uchiha",
        },
        status: { label: "Principal" },
      },
    ],
    seasons: [
      {
        id: "season-001",
        groupType: { label: "Temporada" },
        number: 1,
        title: "Naruto",
        translatedTitle: "",
        releaseYear: 2002,
        resolution: { label: "720p" },
        language: { label: "Legendado" },
        synopsis: "A primeira fase da jornada de Naruto como ninja.",
        cover: {
          url: "/assets/media/300x450?text=Season+1",
          alt: "Capa da primeira temporada de Naruto",
        },
        trailer: {
          url: "/assets/media/naruto-season-1.mp4",
          fileType: "video/mp4",
        },
        status: {
          acquired: true,
          consumed: true,
        },
        episodes: [
          {
            id: "episode-001",
            number: 1,
            title: "Entre na Vila da Folha!",
            status: { acquired: true, consumed: true },
          },
          {
            id: "episode-002",
            number: 2,
            title: "Meu nome é Konohamaru!",
            status: { acquired: true, consumed: false },
          },
        ],
      },
    ],
    ovas: [],
    specials: [],
    sequel: {
      next: {
        title: "Naruto Shippuden",
        releaseYear: 2007,
        path: "/animes/naruto-shippuden",
        cover: {
          url: "/assets/media/300x450?text=Shippuden",
          alt: "Capa de Naruto Shippuden",
        },
      },
    },
    gallery: [
      {
        url: "/assets/media/800x450?text=Naruto+Gallery+1",
        alt: "Naruto em uma cena de ação",
      },
      {
        url: "/assets/media/800x450?text=Naruto+Gallery+2",
        alt: "Naruto e seus amigos",
      },
    ],
    files: [
      {
        label: "Guia de episódios",
        url: "https://example.com/files/naruto-guide.pdf",
        fileType: ".pdf",
        size: 102400,
      },
    ],
    franchises: [
      {
        title: "Naruto",
        slug: "naruto",
        path: "/franquias/naruto",
        logo: {
          url: "/assets/media/300x150?text=Naruto+Logo",
          alt: "Logo da franquia Naruto",
        },
      },
    ],
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
    type: {
      label: "Jogo",
    },
    synopsis:
      "Link explora Hyrule e os céus acima do reino para descobrir a origem de uma nova ameaça.",
    languages: [{ label: "Português" }, { label: "Inglês" }],
    themes: [{ label: "Aventura" }, { label: "Fantasia" }],
    cover: {
      url: "/assets/media/300x450?text=Zelda",
      alt: "Capa de The Legend of Zelda: Tears of the Kingdom",
    },
    characters: [
      {
        name: "Link",
        codenames: ["Herói de Hyrule"],
        image: {
          url: "/assets/media/200x200?text=Link",
          alt: "Link",
        },
        status: { label: "Protagonista" },
      },
      {
        name: "Zelda",
        codenames: ["Princesa de Hyrule"],
        image: {
          url: "/assets/media/200x200?text=Zelda",
          alt: "Zelda",
        },
        status: { label: "Principal" },
      },
    ],
    gameDetails: {
      platforms: [{ label: "Nintendo Switch" }],
      genres: [{ label: "Ação" }, { label: "Aventura" }],
      gameplay: { label: "Mundo aberto" },
      modes: [{ label: "Um jogador" }],
      players: {
        min: 1,
        max: 1,
      },
    },
    gameEdition: {
      base: null,
      dlcs: [],
      expansions: [],
    },
    sequel: {
      previous: {
        title: "The Legend of Zelda: Breath of the Wild",
        releaseYear: 2017,
        path: "/jogos/the-legend-of-zelda-breath-of-the-wild",
        cover: {
          url: "/assets/media/300x450?text=Breath+of+the+Wild",
          alt: "Capa de The Legend of Zelda: Breath of the Wild",
        },
      },
    },
    gallery: [
      {
        url: "/assets/media/800x450?text=Zelda+Gameplay",
        alt: "Exploração de Hyrule",
      },
    ],
    files: [],
    franchises: [
      {
        title: "The Legend of Zelda",
        slug: "the-legend-of-zelda",
        path: "/franquias/the-legend-of-zelda",
        logo: {
          url: "/assets/media/300x150?text=Zelda+Logo",
          alt: "Logo da franquia The Legend of Zelda",
        },
      },
    ],
    status: {
      acquired: true,
      consumed: false,
    },
  },

  {
    id: "media-003",
    slug: "one-piece",
    path: "/animes/one-piece",
    title: "One Piece",
    translatedTitle: "",
    releaseYear: 1999,
    type: {
      label: "Anime",
    },
    synopsis:
      "Monkey D. Luffy parte em uma aventura pelos mares para encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas.",
    languages: [{ label: "Japonês" }, { label: "Português" }],
    themes: [{ label: "Aventura" }, { label: "Piratas" }, { label: "Ação" }],
    cover: {
      url: "/assets/media/300x450?text=One+Piece",
      alt: "Capa de One Piece",
    },
    characters: [],
    seasons: [],
    ovas: [],
    specials: [],
    sequel: {},
    gallery: [],
    files: [],
    franchises: [],
    status: {
      acquired: false,
      consumed: false,
    },
  },
];
