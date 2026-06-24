/**
 * MediaTypeRegistry é o registro central de mapeamento
 * entre MediaTypes e suas propriedades de sistema no CATFLIX.
 *
 * Ele conecta o domínio (MediaType) com informações estruturais
 * usadas por UI, routing e engines do sistema.
 */

import { MediaType } from "../types";



export const mediaTypeRegistry: Record<
  MediaType,
  { label: string; slug: string }
> = {
  anime: { label: "Animes", slug: "animes" },
  series: { label: "Séries", slug: "series" },
  movie: { label: "Filmes", slug: "filmes" },
  dorama: { label: "Doramas", slug: "doramas" },
  ova: { label: "OVAs", slug: "ovas" },

  book: { label: "Livros", slug: "livros" },
  manga: { label: "Mangás", slug: "mangas" },
  comic: { label: "Quadrinhos", slug: "quadrinhos" },
  webtoon: { label: "Webtoons", slug: "webtoons" },

  music: { label: "Músicas", slug: "musicas" },
  podcast: { label: "Podcasts", slug: "podcasts" },
  audiobook: { label: "Audiolivros", slug: "audiolivros" },

  game: { label: "Jogos Eletrônicos", slug: "jogos-eletronicos" },
  "board-game": { label: "Jogos de Tabuleiro", slug: "jogos-de-tabuleiro" },
  "card-game": { label: "Jogos de Cartas", slug: "jogos-de-cartas" },
  rpg: { label: "RPGs", slug: "rpgs" },
};