import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "@/modules/attribute/models";
import type { Attribute } from "@/modules/attribute/types";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";
import { isValidObjectId } from "mongoose";

export async function deleteAttributeById(
  id: string,
): Promise<Attribute | null> {
  if (!isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const deletedAttributeDoc = await AttributeModel.findByIdAndDelete(id);

  if (!deletedAttributeDoc) {
    return null;
  }

  return mapAttributeDocToAttribute(deletedAttributeDoc);
}
