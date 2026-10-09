import { MediaDetails } from "@/modules/media/types";

export async function getMediaDetailsBySlug(
  slug: string,
): Promise<MediaDetails | null> {
  return {
    slug: "naruto-2020--anime-aHaH",

    title: "Naruto",
    translatedTitle: "asasa",
    releaseYear: "2020",
    synopsis:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime asperiores, quis dolore quas excepturi eos, amet dicta dolorum consequuntur veniam tempore recusandae laudantium, cum deserunt sequi pariatur. Doloribus, ab assumenda!",

    themes: [{ label: "Ninja" }],

    cover: {
      url: "/assets/midias/naruto-2020--anime-aHaH-capa.jpg",
      alt: "Capa do título Naruto",
    },
    trailer: {
      url: "/assets/midias/naruto-2020--anime-aHaH-trailer.mp4",
      fileType: "video/mp4",
    },

    status: {
      acquired: false,
      consumed: false,
    },
  };
}
