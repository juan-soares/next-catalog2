import { Attribute, AttributeTypeKey } from "@/modules/1-attribute";

export type CatalogFilterOption = {
  id: Attribute["id"];
  label: string;
  value: string;
  type: AttributeTypeKey;
};
