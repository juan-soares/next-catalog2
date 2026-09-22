import { MediaDetails } from "../types";

export async function getMediaDetailsById(
  id: string,
): Promise<MediaDetails | null> {
  const mediaDetailsMock = {
    id: "1",

    title: "Era uma vez",
    translatedTitle: "Once Upon a Time",

    releaseYear: 2024,

    type: {
      id: "anime",
      label: "Anime",
    },

    cover: {
      url: "/images/cover.jpg",
      alt: "Capa de Era uma vez",
    },

    trailer: {
      url: "/videos/trailer.mp4",
    },

    synopsis:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci vel velit consequat tincidunt.",

    themes: [
      {
        id: "1",
        label: "Aventura",
      },
      {
        id: "2",
        label: "Fantasia",
      },
      {
        id: "3",
        label: "Ação",
      },
    ],

    userStatus: {
      acquired: false,
      consumed: false,
    },

    edition: null,

    seasons: [
      {
        id: "season-1",
        number: 1,
        title: "Era uma vez",
        releaseYear: 2024,
        resolution: "1080p",
        language: "pt-BR",

        episodes: [
          {
            id: "episode-1",
            number: 1,
            title: "Era agora.",
            userStatus: {
              acquired: false,
              consumed: true,
            },
          },
          {
            id: "episode-2",
            number: 2,
            title: "O começo.",
            userStatus: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    gallery: [
      {
        id: "gallery-1",
        title: "Imagem promocional",
        thumbnailUrl: "/images/gallery/thumb-1.jpg",
        imageUrl: "/images/gallery/1.jpg",
      },
      {
        id: "gallery-2",
        title: "Personagem principal",
        thumbnailUrl: "/images/gallery/thumb-2.jpg",
        imageUrl: "/images/gallery/2.jpg",
      },
    ],

    files: [
      {
        id: "file-1",
        name: "Plano da obra",
        size: 125829120,
        sizeLabel: "120 MB",
        extension: "pdf",
        mimeType: "application/pdf",
        downloadUrl: "/downloads/plano.pdf",
      },
      {
        id: "file-2",
        name: "Informações adicionais",
        size: 5242880,
        sizeLabel: "5 MB",
        extension: "pdf",
        mimeType: "application/pdf",
        downloadUrl: "/downloads/informacoes.pdf",
      },
    ],

    continuity: {
      previous: {
        id: "previous-1",
        title: "Era uma vez: O começo",
        releaseYear: 2023,
        cover: {
          url: "/images/previous.jpg",
          alt: "Capa de Era uma vez: O começo",
        },
      },

      next: {
        id: "next-1",
        title: "Era uma vez: O futuro",
        releaseYear: 2025,
        cover: {
          url: "/images/next.jpg",
          alt: "Capa de Era uma vez: O futuro",
        },
      },
    },

    franchises: [
      {
        id: "franchise-1",
        title: "Minha Franquia",
        logo: {
          url: "/images/franchise.jpg",
          alt: "Logo da Minha Franquia",
        },
      },
    ],
  } as const;

  return mediaDetailsMock;
}
