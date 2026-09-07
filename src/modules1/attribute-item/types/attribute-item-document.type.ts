import { AttributeTypeKey } from "@/modules1/attribute-type";
import { HydratedDocument } from "mongoose";

export type AttributeItemDocument = HydratedDocument<{
  label: string;
  slug: string;
  attributeType: AttributeTypeKey;
}>;
