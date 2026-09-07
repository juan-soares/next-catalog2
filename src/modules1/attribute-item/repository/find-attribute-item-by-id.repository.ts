import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeItem, AttributeItemDocument } from "../types";
import { AttributeModel } from "../model";
import { mapAttributeDocToAttributeItem } from "../mappers";

export async function findAttributeItemById(
  id: string,
): Promise<AttributeItem | null> {
  if (!mongoose.isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const attributeItemDoc: AttributeItemDocument | null =
    await AttributeModel.findById(id);

  if (!attributeItemDoc) return null;

  return mapAttributeDocToAttributeItem(attributeItemDoc);
}
