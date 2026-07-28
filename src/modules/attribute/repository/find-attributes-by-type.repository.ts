import { connectToDatabase } from "@/lib/mongoose";
import { AttributeModel } from "../model";
import { Attribute, AttributeDocument, AttributeTypeKey } from "../types";

export async function findAttributesByType(
  type: AttributeTypeKey,
): Promise<Attribute[]> {
  await connectToDatabase();
  const document: AttributeDocument[] = await AttributeModel.find({ type })
    .sort({ label: 1 })
    .lean();

  return document.map(({ value, label, type }) => ({
    value,
    label,
    type,
  }));
}
