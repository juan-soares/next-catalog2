import { AttributeItem } from "@/modules1/attribute-item/types";
import { CatalogFilterOption } from "../types";

export function mapAttributeItemToCatalogOption(
  attributeItem: AttributeItem,
): CatalogFilterOption {
  return {
    value: attributeItem.id,
    label: attributeItem.label,
  };
}
