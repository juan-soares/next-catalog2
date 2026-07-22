import { MediaTypesNavlink } from "../types";
import { mediaTypesRegistry } from "../registry";

export const mediaTypesNavigation: MediaTypesNavlink[] = Object.values(
  mediaTypesRegistry,
).map((mediaType) => ({
  label: mediaType.label,
  href: `/catalogo/${mediaType.slug}`,
}));
