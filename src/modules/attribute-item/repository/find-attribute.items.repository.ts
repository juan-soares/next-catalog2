import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeItem, AttributeItemDocument } from "../types";
import { mapAttributeDocToAttributeItem } from "../mappers";

type SearchParams = {
  attributeType?: AttributeTypeKey;
};

export async function findAttributeItems(
  params: SearchParams = {},
): Promise<AttributeItem[]> {
  await connectToDatabase();

  const attributeDocs: AttributeItemDocument[] =
    await AttributeModel.find(params).lean();

  return attributeDocs.map(mapAttributeDocToAttributeItem);
}
