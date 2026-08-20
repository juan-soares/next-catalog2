import { AttributeTypeKey } from "@/modules/attribute-type";
import { HydratedDocument } from "mongoose";

export type AttributeItemDocument = HydratedDocument<{
  label: string;
  slug: string;
  attributeType: AttributeTypeKey;
}>;
