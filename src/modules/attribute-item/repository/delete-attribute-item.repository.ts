import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";

export async function deleteAttributeItemById(id: string) {
  await connectToDatabase();

  const deleted = await AttributeModel.findByIdAndDelete(id);

  return deleted !== null;
}
