import { Attribute, AttributeTypeKey } from "@/modules/attribute";

export type CatalogFilterOption = {
  id: Attribute["id"];
  label: string;
  value: string;
  type: AttributeTypeKey;
};
