import { CatalogFilterOption } from "@/modules/catalog";
import { Attribute } from "../types";

export function mapAttributeToCatalogFilterOption(
  attribute: Attribute,
): CatalogFilterOption {
  return {
    id: attribute.id,

    type: attribute.type,
    value: attribute.value,
    label: attribute.label,
  };
}
