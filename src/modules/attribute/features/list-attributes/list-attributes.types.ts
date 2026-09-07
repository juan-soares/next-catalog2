import { AttributeTypeCode } from "../../domain";

export type AttributeListItem = {
  id: string;
  label: string;
  slug: string;
  type: AttributeTypeCode;
};
