import { MediaGroup, MediaGroupCode } from "@/modules/media-group/types";

export const MEDIA_GROUPS_REGISTRY = {
  season: {
    code: "season",
    label: "Temporada",
    slug: "temporadas",
  },

  ova: {
    code: "ova",
    label: "OVA",
    slug: "ovas",
  },
} satisfies Record<MediaGroupCode, MediaGroup>;
