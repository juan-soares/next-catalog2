import { MediaTypeCode, MediaTypeDetails } from "@/modules/media-type/types";

export const MEDIA_TYPE_REPOSITORY = {
  anime: {
    code: "anime",
    groupType: "season",
    label: "Animes",
    slug:"animes",
    path: "/animes",
  },
} satisfies Record<MediaTypeCode, MediaTypeDetails>;
