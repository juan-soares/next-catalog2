import { getMediaItemById } from "@/modules/media-item";
import { MediaItemPageInfo } from "../types";

export async function getMediaItemPageInfoById(
  id: string,
): Promise<MediaItemPageInfo | null> {
  const mediaItem = await getMediaItemById(id);

  return {
    id: "1",
    trailer: "/trailer.mp4",
    cover: "/cover.png",
    title: "Naruto",
    releaseYear: 2000,
    mediaType: { label: "Animes", slug: "animes" },
    themes: ["Ninja"],
    synopsis: "lorenlorenlorenlorenlorenlorenlorenloren",
    acquired: false,
    completed: false,

    seasons: [
      {
        id: "11",
        number: 1,
        title: "",
        releaseYear: 2020,
        languages: ["pt-br"],
        resolutions: ["1090p"],
        acquired: false,
        watched: false,
        episodes: [
          {
            id: "asa",
            number: 1,
            title: "Primeiro",
            releaseYear: 2000,
            acquired: false,
            watched: false,
          },
        ],
      },
    ],
  };

  if (!mediaItem) return null;

  return {
    trailer: mediaItem.trailer,
    cover: mediaItem.cover,
    title: mediaItem.title,
    releaseYear: Number(mediaItem.releaseDate.getFullYear().toString()),
    mediaType: mediaItem.mediaType.label,
    themes: mediaItem.themes.map(({ label }) => label),
    synopsis: mediaItem.synopsis,
    acquired: mediaItem.acquired,
    completed: mediaItem.completed,
  };
}
