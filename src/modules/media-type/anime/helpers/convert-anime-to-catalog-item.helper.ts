/**
 * O que este arquivo faz:
 * - Converte uma entidade Anime para um item de catálogo.
 * - Adapta os dados do domínio para apresentação.
 *
 * O que este arquivo NÃO faz:
 * - Não busca dados.
 * - Não acessa banco.
 * - Não conhece componentes.
 * - Não executa regras de negócio.
 */

import type { CatalogItem } from "@/modules/catalog";
import type { Anime } from "../anime.entity";

export function convertAnimeToCatalogItem(anime: Anime): CatalogItem {
  return {
    href: `/animes/${anime.slug}`,

    cover: anime.cover,

    title: anime.title,

    releaseYear: anime.releaseDate.getFullYear(),
  };
}
