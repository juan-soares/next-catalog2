import { MediaDetails } from "@/modules/media";

export type GlobalSearchResult = Pick<
  MediaDetails,
  "slug" | "path" | "cover" | "type" | "releaseYear" | "title" | "synopsis"
>;
