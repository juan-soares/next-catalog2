import { MediaTypeCode, MediaTypeDetails } from "@/modules/media-type/types";

export const MEDIA_TYPE_REPOSITORY = {
  anime: {
    code: "anime",
    slug: "animes",
    groupType: "season",
    label: "Animes",
    path: "/animes",
  },
} satisfies Record<MediaTypeCode, MediaTypeDetails>;
