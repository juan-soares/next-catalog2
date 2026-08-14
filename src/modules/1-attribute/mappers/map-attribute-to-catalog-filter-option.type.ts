import { CatalogFilterOption } from "@/modules/1-catalog";
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
