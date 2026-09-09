import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "@/modules/attribute/models";
import type { Attribute } from "@/modules/attribute/types";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";

export async function deleteAttributeById(
  id: string,
): Promise<Attribute | null> {
  await connectToDatabase();

  const deletedAttributeDoc = await AttributeModel.findByIdAndDelete(id);

  return mapAttributeDocToAttribute(deletedAttributeDoc);
}
