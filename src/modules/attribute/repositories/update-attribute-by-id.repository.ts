import { connectToDatabase } from "@/lib/mongoose";
import type { Attribute, UpdateAttributeData } from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/models";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";
import { isValidObjectId } from "mongoose";

export async function updateAttributeById(
  id: string,
  data: UpdateAttributeData,
): Promise<Attribute | null> {
  if (!isValidObjectId(id)) {
    return null;
  }
  await connectToDatabase();

  const attributeDoc = await AttributeModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true },
  ).lean();

  if (!attributeDoc) return null;

  return mapAttributeDocToAttribute(attributeDoc);
}
