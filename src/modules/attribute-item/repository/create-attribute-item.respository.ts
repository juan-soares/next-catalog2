import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeItem, AttributeItemDocument } from "../types";
import { mapAttributeDocToAttributeItem } from "../mappers";

type Props = {
  label: string;
  attributeType: AttributeTypeKey;
};

export async function createAttributeItem(
  newAttributeItem: Props,
): Promise<AttributeItem> {
  await connectToDatabase();

  const attributeDoc: AttributeItemDocument =
    await AttributeModel.create(newAttributeItem);

  return mapAttributeDocToAttributeItem(attributeDoc);
}
