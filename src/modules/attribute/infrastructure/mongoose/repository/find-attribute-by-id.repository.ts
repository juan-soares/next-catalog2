import { Attribute } from "@/modules/attribute/domain";

import { AttributeModel } from "../attribute.model";
import { AttributeDocument } from "../attribute-document.type";
import { toAttribute } from "../attribute.mapper";

export async function findAttributeById(id: string): Promise<Attribute | null> {
  const document = await AttributeModel.findById(id).lean<AttributeDocument>();

  if (!document) {
    return null;
  }

  return toAttribute(document);
}
