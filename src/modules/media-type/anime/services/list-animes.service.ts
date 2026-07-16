/**
 * O que este arquivo faz:
 * - Lista animes para o catálogo.
 * - Coordena repository e conversão para apresentação.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa banco diretamente.
 * - Não renderiza UI.
 * - Não interpreta URL.
 */

import type { CatalogQuery, CatalogResult } from "@/modules/catalog";

import { convertAnimeToCatalogItem } from "../helpers";
import { animeRepository } from "../repository";

export async function listAnimes(query: CatalogQuery): Promise<CatalogResult> {
  const animes = await animeRepository.findAll(query);

  return {
    items: animes.map(convertAnimeToCatalogItem),
  };
}
