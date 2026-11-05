import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { AttributeData, AttributeView } from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/model";
import { mapAttributeDocToAttributeView } from "@/modules/attribute/mappers";

export async function createAttribute(
  data: AttributeData,
): Promise<AttributeView | null> {
  try {
    await connectToMongoDB();

    const attributeDoc = await AttributeModel.create(data);

    return mapAttributeDocToAttributeView(attributeDoc);
  } catch (error) {
    console.error("Erro ao salvar atributo:", error);
    return null;
  }
}
