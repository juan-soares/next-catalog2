import { connectToMongoDB } from "@/shared/libs/mongoose";
import type {
  AttributeDoc,
  AttributeView,
  FindAttributeDataParams,
} from "@/modules/attribute/types";
import { AttributeModel } from "@/modules/attribute/model";
import { mapAttributeDocToAttributeView } from "@/modules/attribute/mappers";

export async function findAttributes(
  findParams: FindAttributeDataParams,
): Promise<AttributeView[]> {
  const { q, sort, fields } = findParams;

  try {
    await connectToMongoDB();

    const attributeDocs = await AttributeModel.find({
      ...fields,
      ...(q && {
        label: { $regex: q, $options: "i" },
      }),
    })
      .sort(sort)
      .lean<AttributeDoc[]>();

    return attributeDocs.map(mapAttributeDocToAttributeView);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar atributos", error);
    return [];
  }
}
