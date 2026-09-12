import { connectToDatabase } from "@/shared/libs/mongoose";
import { AttributeModel } from "@/modules/attribute/models";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";
import type { Attribute, CreateAttributeData } from "@/modules/attribute/types";

export async function createOneAttribute(
  data: CreateAttributeData,
): Promise<Attribute> {
  await connectToDatabase();

  const attributeDoc = await AttributeModel.create(data);

  return mapAttributeDocToAttribute(attributeDoc);
}
