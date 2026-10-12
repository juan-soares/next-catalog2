import { MediaDetails } from "@/modules/media/types";
import { string } from "zod";

export async function getMediaDetailsBySlug(
  slug: string,
): Promise<MediaDetails | null> {
  return {
    slug: "naruto-2020--anime-aHaH",
    type: { label: "Animes", path: "/animes", code: "anime" },

    title: "Naruto",
    translatedTitle: "asasa",
    releaseYear: "2020",
    synopsis:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",

    themes: [{ label: "Ninja" }],

    cover: {
      url: "/assets/medias/naruto-2020--anime-aHaH-capa.jpg",
      alt: "Capa do título Naruto",
    },
    trailer: {
      url: "/assets/medias/naruto-2020--anime-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    seasons: [
      {
        id: "1234",
        number: 1,
        releaseYear: "2000",
        title: "-",
        language: "DUAL",
        resolution: "1080p",

        cover: { url: "/assets/", alt: "Capa da temporada de Naruto." },
        trailer: { url: "/assets/", fileType: "video/mp4" },
        synopsis:
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",
        status: {
          acquired: false,
          consumed: false,
        },
        episodes: [
          {
            id: "123",
            number: 1,
            title: "Era uma vez",
            status: {
              acquired: false,
              consumed: false,
            },
          },
        ],
      },
    ],

    franchises: [
      {
        title: "Naruto",
        logo: {
          url: "/assets/franchises/naruto-franchise-aHaH-logo.png",
          alt: "Logo da franquia Naruto",
        },
      },
      {
        title: "Naruto Anime",
        logo: {
          url: "/assets/naruto-anime-franchise-aHaH-logo.png",
          alt: "Logo da franquia Naruto Anime",
        },
      },
    ],

    status: {
      acquired: false,
      consumed: false,
    },
  };
}
