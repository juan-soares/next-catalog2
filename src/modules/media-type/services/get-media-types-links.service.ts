import { MediaTypesNavlink } from "../types";
import { getAllMediaTypes } from "./get-all-media-types.service";

export function getMediaTypesLinks(): MediaTypesNavlink[] {
  return getAllMediaTypes().map(({ label, slug }) => ({
    label,
    href: `/catalogo/${slug}`,
  }));
}
