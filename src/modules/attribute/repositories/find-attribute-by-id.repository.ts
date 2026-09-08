import { connectToDatabase } from "@/lib/mongoose";
import type { Attribute } from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/models";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";

export async function findAttributeById(id: string): Promise<Attribute | null> {
  await connectToDatabase();
  const attribute = await AttributeModel.findById(id).lean();

  if (!attribute) {
    return null;
  }

  return mapAttributeDocToAttribute(attribute);
}
