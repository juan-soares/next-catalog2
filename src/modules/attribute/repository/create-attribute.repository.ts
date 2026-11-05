import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { AttributeData, AttributeView } from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/model";
import { mapAttributeDataToAttributeView } from "@/modules/attribute/mappers";

export async function createAttribute(
  data: AttributeData,
): Promise<AttributeView | null> {
  try {
    await connectToMongoDB();

    const attributeData = await AttributeModel.create(data);

    if (!attributeData) return null;

    const id = attributeData._id.toString();

    return mapAttributeDataToAttributeView(id, attributeData);
  } catch (error) {
    console.error("Erro ao salvar atributo:", error);
    return null;
  }
}
