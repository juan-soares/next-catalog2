import { mediaTypesRegistry } from "../media-types.registry";

export const MEDIA_TYPE_NAV_LINKS = Object.entries(mediaTypesRegistry).map(
  ([slug, registry]) => ({
    href: `/${slug}`,
    label: registry.label,
  }),
);
