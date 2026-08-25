import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";

export async function deleteAttributeItemById(id: string) {
  if (!mongoose.isValidObjectId(id)) {
    return null;
  }

  await connectToDatabase();

  const deleted = await AttributeModel.findByIdAndDelete(id);

  return deleted !== null;
}
