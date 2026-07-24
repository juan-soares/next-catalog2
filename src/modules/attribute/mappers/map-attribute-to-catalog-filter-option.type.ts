import { CatalogFilterOption } from "@/modules/catalog";
import { Attribute } from "../types";

export function mapAttributeToCatalogFilterOption(
  attribute: Attribute,
): CatalogFilterOption {
  return {
    label: attribute.label,
    value: attribute.label,
    name: attribute.type,
  };
}
