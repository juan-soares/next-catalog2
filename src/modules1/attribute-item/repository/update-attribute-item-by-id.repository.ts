import { connectToDatabase } from "@/lib/mongoose";
import mongoose from "mongoose";
import { AttributeModel } from "../model";
import { AttributeItem } from "../types";

export async function updateAttributeItemById(
  attributeItem: AttributeItem,
): Promise<boolean> {
  if (!mongoose.isValidObjectId(attributeItem.id)) {
    return false;
  }

  await connectToDatabase();

  const result = await AttributeModel.findByIdAndUpdate(
    attributeItem.id,
    {
      attributeType: attributeItem.attributeType,
      label: attributeItem.label,
    },
    {
      new: true,
    },
  );

  return result != undefined;
}
