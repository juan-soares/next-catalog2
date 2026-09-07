import { Attribute, AttributeTypeCode } from "@/modules/attribute/domain";
import { AttributeModel } from "../attribute.model";
import { AttributeDocument } from "../attribute-document.type";
import { toAttribute } from "../attribute.mapper";

export async function findAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  const documents = await AttributeModel.find({ type })
    .sort({ label: 1 })
    .lean<AttributeDocument[]>();

  return documents.map(toAttribute);
}
