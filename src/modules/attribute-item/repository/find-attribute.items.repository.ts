import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeItem, AttributeItemDocument } from "../types";
import { mapAttributeDocToAttributeItem } from "../mappers";

type SearchParams = {
  sortOrder: "label-asc" | "label-desc";
  attributeType?: AttributeTypeKey;
};

export async function findAttributeItems({
  sortOrder = "label-asc",
  attributeType,
}: SearchParams): Promise<AttributeItem[]> {
  await connectToDatabase();

  const sortDirection = sortOrder === "label-desc" ? -1 : 1;
  const filter = attributeType ? { attributeType: attributeType } : {};

  const attributeDocs: AttributeItemDocument[] = await AttributeModel.find(
    filter,
  )
    .collation({ locale: "pt", strength: 1 })
    .sort({ label: sortDirection })
    .lean();

  return attributeDocs.map(mapAttributeDocToAttributeItem);
}
