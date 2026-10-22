import type { MediaView } from "@/modules/media/types";

export type GlobalSearchResult = Pick<
  MediaView,
  "slug" | "path" | "cover" | "type" | "releaseYear" | "title" | "synopsis"
>;
