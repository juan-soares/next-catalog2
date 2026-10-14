import { MediaTypeCode, MediaTypeDetails } from "@/modules/media-type/types";

export const MEDIA_TYPE_REPOSITORY = {
  anime: {
    code: "anime",
    label: "Animes",
    slug: "animes",
    path: "/animes",
    tabs: [
      "info",
      "season",
      "ova",
      "special",
      "gallery",
      "files",
      "sequel",
      "franchises",
    ],
  },
} satisfies Record<MediaTypeCode, MediaTypeDetails>;
