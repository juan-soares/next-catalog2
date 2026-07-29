import { connectToDatabase } from "@/lib/mongoose";
import { Attribute, AttributeTypeKey } from "../types";
import { AttributeModel } from "../model";

export async function findAttributeByTypeAndValue(
  type: AttributeTypeKey,
  value: string,
): Promise<Attribute | null> {
  await connectToDatabase();

  const document = await AttributeModel.findOne({ type, value }).lean();

  if (!document) return null;

  return {
    value: document.value,
    label: document.label,
    type: document.type,
  };
}
