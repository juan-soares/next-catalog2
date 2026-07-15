/**
 * O que este arquivo faz:
 * - Lista os animes do catálogo.
 * - Converte entidades de domínio para itens de catálogo.
 *
 * O que este arquivo NÃO faz:
 * - Não acessa MongoDB diretamente.
 * - Não renderiza UI.
 * - Não interpreta URL.
 */

import type { CatalogQuery, CatalogResult } from "@/modules/catalog";

import { animeRepository } from "../repository";
import { convertAnimeToCatalogItem } from "../helpers";

export async function listAnimes(query: CatalogQuery): Promise<CatalogResult> {
  const animes = await animeRepository.findAll(query);

  return {
    items: animes.map(convertAnimeToCatalogItem),
  };
}
