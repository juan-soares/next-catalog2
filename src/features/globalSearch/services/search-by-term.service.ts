import { searchMediaItemsByTitle } from "@/modules/media-item";
import { GlobalResults } from "../types";
import { mapMediaItemToGlobalResult } from "../mappers";

export async function searchByTerm(term: string): Promise<GlobalResults> {
  const mediaItems = await searchMediaItemsByTitle(term, {
    limit: 5,
    orderBy: "updatedAt",
    order: "desc",
  });

  return mediaItems.map(mapMediaItemToGlobalResult);
}
