import type { AttributeTypeView } from "@/modules/attribute/types";

export type AttributeView = {
  id: string;
  label: string;
  type: AttributeTypeView;
};
