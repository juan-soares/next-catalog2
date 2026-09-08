import { connectToDatabase } from "@/lib/mongoose";
import type {
  Attribute,
  CreateAttributeData,
} from "@/modules/attribute/domain";
import type { AttributeDocument } from "../attribute-document.type";
import { AttributeModel } from "../../../models/attribute.model";
import { toAttribute } from "../attribute.mapper";

export async function createAttribute(
  data: CreateAttributeData,
): Promise<Attribute | null> {
  await connectToDatabase();

  const attributeDoc: AttributeDocument = await AttributeModel.create(data);
  return toAttribute(attributeDoc);
}
