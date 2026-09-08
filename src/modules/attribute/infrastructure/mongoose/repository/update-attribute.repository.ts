import { connectToDatabase } from "@/lib/mongoose";
import type {
  Attribute,
  AttributeIdentifiers,
  UpdateAttributeData,
} from "@/modules/attribute/domain";
import { AttributeModel } from "../../../models/attribute.model";
import { toAttribute } from "../attribute.mapper";

export async function updateAttribute(
  identifiers: AttributeIdentifiers,
  data: UpdateAttributeData,
): Promise<Attribute | null> {
  await connectToDatabase();

  const attributeDoc = await AttributeModel.findOneAndUpdate(
    identifiers,
    data,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!attributeDoc) {
    return null;
  }

  return toAttribute(attributeDoc);
}
