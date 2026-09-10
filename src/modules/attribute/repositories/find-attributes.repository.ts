import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "@/modules/attribute/models";
import type {
  Attribute,
  FindAttributesFilters,
} from "@/modules/attribute/types";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";

export async function findAttributes(
  filters: FindAttributesFilters = {},
): Promise<Attribute[]> {
  await connectToDatabase();

  const attributeDocs = await AttributeModel.find(filters)
    .sort({ label: 1 })
    .collation({
      locale: "pt",
      strength: 1,
    })
    .lean();

  return attributeDocs.map(mapAttributeDocToAttribute);
}
