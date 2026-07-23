import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";
import { Attribute, AttributeTypeKeys } from "../types";

export async function findAttributesByType(
  type: AttributeTypeKeys,
): Promise<Attribute[]> {
  await connectToDatabase();
  const document = await AttributeModel.find({ type }).lean();
  return document.map(({ _id, label, type }) => ({
    id: _id.toString(),
    label,
    type,
  }));
}
