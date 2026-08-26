import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeItem, AttributeItemDocument } from "../types";
import { mapAttributeDocToAttributeItem } from "../mappers";

type SearchParams = {
  attributeType?: AttributeTypeKey;
  sortOrder: "label-asc" | "label-desc";
};

export async function findAttributeItems({
  sortOrder = "label-asc",
}: SearchParams): Promise<AttributeItem[]> {
  await connectToDatabase();

  const sortDirection = sortOrder === "label-desc" ? -1 : 1;

  const attributeDocs: AttributeItemDocument[] = await AttributeModel.find()
    .collation({ locale: "pt", strength: 1 })
    .sort({ label: sortDirection })
    .lean();

  return attributeDocs.map(mapAttributeDocToAttributeItem);
}
