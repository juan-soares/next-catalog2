import { attributeRegistry } from "../attribute.registry";

export const ATTRIBUTE_LINKS = Object.values(attributeRegistry).map(
  ({ slug, label }) => ({ label, href: `/admin/atributos/${slug}` }),
);
