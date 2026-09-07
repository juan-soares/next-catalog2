import mongoose from "mongoose";

import { connectToDatabase } from "@/lib/mongoose";

import { AttributeModel } from "../attribute.model";

export async function deleteAttributeById(id: string): Promise<boolean> {
  if (!mongoose.isValidObjectId(id)) {
    return false;
  }

  await connectToDatabase();

  const deleted = await AttributeModel.findByIdAndDelete(id);

  return deleted !== null;
}
