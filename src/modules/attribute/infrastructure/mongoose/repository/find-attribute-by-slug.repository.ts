import { connectToDatabase } from "@/lib/mongoose";
import { Attribute, AttributeIdentifiers } from "@/modules/attribute/domain";
import { AttributeModel } from "../../../models/attribute.model";
import { toAttribute } from "../attribute.mapper";

export async function findAttributeBySlug(
  slug: string,
): Promise<Attribute | null> {
  await connectToDatabase();

  const attributeDoc = await AttributeModel.findOne({ slug });

  if (!attributeDoc) {
    return null;
  }

  return toAttribute(attributeDoc);
}
