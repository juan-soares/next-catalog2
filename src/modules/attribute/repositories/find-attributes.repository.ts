import { AttributeModel } from "@/modules/attribute/models";
import { Attribute, FindAttributesFilters } from "@/modules/attribute/types";
import { mapAttributeDocToAttribute } from "@/modules/attribute/mappers";

export async function findAttributes(
  filters: FindAttributesFilters = {},
): Promise<Attribute[]> {
  const attributeDocs = await AttributeModel.find(filters).lean();

  return attributeDocs.map(mapAttributeDocToAttribute);
}
