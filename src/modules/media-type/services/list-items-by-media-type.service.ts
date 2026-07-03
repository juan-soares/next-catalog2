import { CatalogResult, MediaTypeSlug } from "../types";

export async function listItemsByMediaType(
  mediaType: MediaTypeSlug,
  query: {},
): Promise<CatalogResult> {
  return { items: [] };
}
