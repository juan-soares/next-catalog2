import { MEDIA_TYPE_CATALOG_PATH } from "@/shared/consts/paths.const";
import { MediaTypeDefinition } from "../types";

export const MEDIA_TYPES = {
  anime: {
    label: "Animes",
    slug: "animes",
    newPath: `${MEDIA_TYPE_CATALOG_PATH}animes/novo`,
  },
} satisfies Record<string, MediaTypeDefinition>;
