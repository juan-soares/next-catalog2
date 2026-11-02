import type { GlobalSearchResult } from "@/modules/global-search/types";

export async function searchGlobalMediasFromClientSide(
  term: string,
): Promise<GlobalSearchResult[]> {
  const params = new URLSearchParams({ term });

  const response = await fetch(`/api/search?${params}`);

  if (!response.ok) {
    throw new Error("Falha ao pesquisar mídias.");
  }

  return response.json();
}
