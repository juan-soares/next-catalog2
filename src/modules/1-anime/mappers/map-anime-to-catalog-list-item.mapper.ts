import { CatalogListItem } from "@/modules/1-catalog";
import { Anime } from "../types";

export function mapAnimetoCatalogListItem(anime: Anime): CatalogListItem {
  return {
    label: anime.title,
    href: `/catalogo/midias/animes/${anime.slug}`,
    cover: anime.cover,
    releaseYear: anime.releaseDate.toString().slice(0, 4),
  };
}
