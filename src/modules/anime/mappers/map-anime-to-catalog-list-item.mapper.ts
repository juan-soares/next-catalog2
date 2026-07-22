import { CatalogListItem } from "@/modules/catalog";
import { Anime } from "../types";

export function mapAnimetoCatalogListItem(anime: Anime): CatalogListItem {
  return {
    label: anime.title,
    href: `/catalogo/animes/${anime.slug}`,
    cover: anime.cover,
    releaseYear: anime.releaseDate.toString().slice(0, 4),
  };
}
